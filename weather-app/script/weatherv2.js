const weather = require("weather-js");

function getResults({ city, lang, degree }) {
  if (!city || typeof city != "string")
    throw new Error("Cidade não foi definida.");

  const weatherResult = weather.find({
    search: city,
    degreeType: degree,
    lang,
  },
  function (err, result) {
    if (err) console.error(err);

    console.log(JSON.stringify(result, null, 2))
  });
}

// test

let x = getResults(
  {
    city: "Três lagoas, MS",
    lang: "pt-BR",
    degree: "C",
  }
);

module.exports = { getResults };
