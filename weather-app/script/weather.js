// carregando variavel de ambiente 
require('dotenv').config()

const apiKey = process.env.API_KEY
const city = 'São Paulo,BR'

const temp_result = document.getElementById('temp_result')
const humidity_result = document.getElementById('humidity_result')
const wind_result = document.getElementById('wind_result')


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &units=metric&appid=${apiKey}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = data.main.temp
      const humidity = data.main.humidity
      const wind = data.wind.speed

      temp_result.innerHTML = temp
      humidity_result.innerHTML = humidity
      wind_result.innerHTML = humidity
      console.log(temp, humidity, wind)
    })
    .catch((error) => {
      console.log(error);
    });
