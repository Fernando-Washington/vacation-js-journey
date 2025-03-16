const apiKey = "42e9ab3e743bbfe2ff51939065e77744";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
