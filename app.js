window.addEventListener("load", () => {
    let ubicacion = document.getElementById("ubicacion");
    let temperatura = document.getElementById("temperatura");
    let tempMax = document.getElementById("tempMaxima");
    let tempMin = document.getElementById("tempMinima");
    let desc = document.getElementById("descripcion");
    let humedad = document.getElementById("humedad");
    let vientos = document.getElementById("vientos");
    let iconoAnimado = document.getElementById("icono-animado");
  
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?id=4568138&lang=es&appid=d154fe80169fe7875d3c64b445b60b2c`;
  
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
  
            ubicacion.textContent = data.name;
  
            let temperature = data.main.temp;
            let fahrenheit = Math.round(((temperature - 273.15) * 9) / 5 + 32);
            temperatura.textContent = `Temperatura: ${fahrenheit} °F`;
  
            let tempMaxi = data.main.temp_max;
            let fahrenheitMax = Math.round(((tempMaxi - 273.15) * 9) / 5 + 32);
            tempMax.textContent = `Temperatura Maxima ${fahrenheitMax} °F`;
  
            let tempMini = data.main.temp_min;
            let fahrenheitMin = Math.round(((tempMini - 273.15) * 9) / 5 + 32);
            tempMin.textContent = `Temperatura Minima ${fahrenheitMin} °F`;
  
            let descrip = data.weather[0].description;
            desc.textContent = `${descrip.replace(/\b[a-z]/g, (c) => c.toUpperCase())}`;
  
            let humidity = data.main.humidity;
            humedad.textContent = `Humedad: ${humidity}%`;
  
            let viento = data.wind.speed;
            vientos.textContent = `Vientos: ${viento} km/h`;
  
            switch (data.weather[0].main) {
              case "Thunderstorm":
                iconoAnimado.src = "./src/assets/Imagenes/animated/thunder.svg";
                break;
              case "Drizzle":
                iconoAnimado.src = "./src/assets/Imagenes/animated/rainy-2.svg";
                break;
              case "Rain":
                iconoAnimado.src = "./src/assets/Imagenes/animated/rainy-7.svg";
                break;
              case "Snow":
                iconoAnimado.src = "./src/assets/Imagenes/animated/snowy-6.svg";
                break;
              case "Clear":
                iconoAnimado.src = "./src/assets/Imagenes/animated/day.svg";
                break;
              case "Atmosphere":
                iconoAnimado.src = "./src/assets/Imagenes/animated/weather.svg";
                break;
              case "Clouds":
                iconoAnimado.src = "./src/assets/Imagenes/animated/cloudy-day-1.svg";
                break;
              default:
                iconoAnimado.src = "./src/assets/Imagenes/animated/cloudy-day-1.svg";
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  });
  
