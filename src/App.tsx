import axios from "axios";
import { useState } from "react";
import Footer from "./assets/components/Footer";

interface Data {
  main: {
    temp: number;
    temp_max: number; 
    temp_min: number;
    humidity: number;
  };
  weather: {
    icon: string; 
    description: string 
  }[];
  wind:{
    speed:number;
  }
  name: string;
}
const App = () => {
  const [search, setSearch] = useState<Data | null>(null);
  const [city, setCity] = useState("");
  const apiKey = import.meta.env.VITE_REACT_APIKEY;

  const fetchdata = async (city: string) => {
    if (!city) return;
    try {
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      console.log(resp);
      setSearch(resp.data);
    } catch (error) {
      console.error(error);
      setSearch(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchdata(city); 
  };

  const capitalize = (string: string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-[100px]">Weather App</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="search"
          placeholder="Enter the name of the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-center rounded-[5px] cursor-pointer h-[35px] mx-auto focus:outline-none text-[#000] w-[300px] mt-[30px] xs:mb-[20px] xs:flex xs:text-[1em] sm:flex sm:mb-[20px] sm:text-[1.1em] md:text-[1.2em] lg:text-[1.3em]"
        />
        <button
          type="submit"
          className="bg-[#c31412] p-[5px] rounded-[5px] cursor-pointer mx-[5px] hover:bg-[#a11212] w-[90px] xs:text-[1em] sm:text-[1.1em] md:text-[1.2em] lg:text-[1.3em]"
        >
          Search
        </button>
      </form>
      {search && (
        <section className="text-center mt-[30px] bg-[#a11212] mx-auto rounded-[5px] py-[25px] w-[200px] h-auto xs:text-[1em] sm:text-[1.1em] md:w-[280px] md:text-[1.2em] lg:w-[300px] lg:text-[1.3em]">
           <img
            src={`https://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`}
            alt={search.weather[0].description}
            className="mt-[10px] mx-auto"
          />
          <h1>{search.name}</h1>
          <p>Temperature: {((search.main.temp - 273.15) * 9 / 5 + 32).toFixed()} °F</p>
          <p>Temperature Min: {((search.main.temp_min - 273.15) * 9 / 5 + 32).toFixed()} °F</p>
          <p>Temperature Max: {((search.main.temp_max - 273.15) * 9 / 5 + 32).toFixed()} °F</p>
          <p>Description: {capitalize(search.weather[0].description.toLocaleUpperCase())}</p>
          <p>Humidity: {search.main.humidity}%</p>
          <p>Wind Speed: {search.wind.speed} mph</p>
        </section>
      )}
      <Footer />
    </>
  );
};

export default App;
