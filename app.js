window.addEventListener("load", () => {
  let ubicacion = document.getElementById("ubicacion");
  let temperatura = document.getElementById("temperatura");
  let tempMax = document.getElementById("tempMaxima");
  let tempMin = document.getElementById("tempMinima");
  let desc = document.getElementById("descripcion");
  let estado = document.getElementById("nombreCuidad");
  let humedad = document.getElementById("humedad");
  let vientos = document.getElementById("vientos");
  let iconoAnimado = document.getElementById("icono-animado");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?id=4568138&lang=es&appid=d154fe80169fe7875d3c64b445b60b2c`;

      console.log(position);

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          ubicacion.textContent = data.name;
          console.log(ubicacion);

          let temperature = data.main.temp;
          let fahrenheit = Math.round(((temperature - 273.15) * 9) / 5 + 32);

          temperatura.textContent = `Temperatura: ${fahrenheit} °F`;
          console.log(temperature, fahrenheit);

          let tempMaxi = data.main.temp_max;
          let fahrenheitMax = Math.round(((tempMaxi - 273.15) * 9) / 5 + 32);
          tempMax.textContent = `Temperatura Maxima ${fahrenheitMax} °F`;
          console.log(tempMax);

          let tempMin = data.main.temp_min;
          let fahrenheitMin = Math.round(((tempMin - 273.15) * 9) / 5 + 32);
          tempMinima.textContent = `Temperatura Minima ${fahrenheitMin} °F`;

          let descrip = data.weather[0].description;
          desc.textContent = `${descrip.replace(/\b[a-z]/g, (c) =>
            c.toUpperCase()
          )}`;
          console.log(desc);

          let humidity = data.main.humidity;
          humedad.textContent = `Humedad: ${humidity}%`;
          console.log(humedad);

          let viento = data.wind.speed;
          vientos.textContent = `Vientos: ${viento} km/h`;
          console.log(viento);
          console.log(data.weather[0].main);
          switch (data.weather[0].main) {
            case "Thunderstorm":
              iconoAnimado.src = "assets/Imagenes/animated/thunder.svg";
              console.log("Thunderstorm");
              break;
            case "Drizzle":
              iconoAnimado.src = "assets/Imagenes/animated/rainy-2.svg";
              console.log("Drizzle");
              break;
            case "Rain":
              iconoAnimado.src = "assets/Imagenes/animated/rainy-7.svg";
              console.log("Rain");
              break;
            case "Snow":
              iconoAnimado.src = "animated/snowy-6.svg";
              console.log("Snow");
              break;
            case "Clear":
              iconoAnimado.src = "assets/Imagenes/animated/day.svg";
              console.log("Clear");
              break;
            case "Atmosphere":
              iconoAnimado.src = "assets/Imagenes/animated/weather.svg";
              console.log("Atmosphere");
              break;
            case "Clouds":
              iconoAnimado.src = "assets/Imagenes/animated/cloudy-day-1.svg";
              console.log("Clouds");
              break;
            default:
              iconoAnimado.src = "assets/Imagenes/animated/cloudy-day-1.svg";
              console.log("por defecto");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    });
  }
});
