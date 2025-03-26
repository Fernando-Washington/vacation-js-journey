// // carregando variavel de ambiente 
// require('dotenv').config()

// const apiKey = process.env.API_KEY
const apiKey = '------variavel-de-ambiente-------'
const input = document.getElementById('input-local')

const temp_result = document.getElementById('temp_result')
const humidity_result = document.getElementById('humidity_result')
const wind_result = document.getElementById('wind_result')

let temp
let humidity
let wind

const getData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == 200) {
      console.log(data);
      temp = data.main.temp
      humidity = data.main.humidity
      wind = data.wind.speed

      temp_result.innerHTML = temp;
      humidity_result.innerHTML = `${humidity}%`
      wind_result.innerHTML = `${wind}km/h`
    } else {
      alert('Cidade não encontrada')
    }
  } catch (error) {
    console.log(error)
  }
};

const showDetails = async () => {
  const city = `${input.value},BR`
  if (city) { // se tivermos dados de city ela vai para a nossa funcao async
    getData(city);
  } else {
    alert('Digite o nome de uma cidade!')
  }
};
