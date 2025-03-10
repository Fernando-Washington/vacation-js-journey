let optionFrom = document.getElementById("optionFrom");
let optionTo = document.getElementById("optionTo");
let resultAmount = document.getElementById("amountInput");
let result = document.getElementById("result");
let resultHtml = document.querySelector(".result-container");
let moonIcon = document.querySelector(".fa-moon");
let sunIcon = document.querySelector(".fa-sun");
let root = document.documentElement; //?

function toggleDarkMode() {
  if (moonIcon.style.display === "block" && sunIcon.style.display === "none") {
    root.style.setProperty("--font-color", " #B4B4B4");
    root.style.setProperty("--bg-color", "rgb(24, 22, 22)");
    root.style.setProperty("--bg-secondary-color", " #2e2e2e");
    root.style.setProperty("--secundary-color", " #659CA3");
    root.style.setProperty("--input-color", " #343434");

    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    root.style.setProperty("--font-color", " #374151");
    root.style.setProperty("--bg-color", " #F3F4F6");
    root.style.setProperty("--bg-secondary-color", " #FFFFFF");
    root.style.setProperty("--secundary-color", " #4F46E5");
    root.style.setProperty("--input-color", " #EFEFEF");

    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
}

function toggleSelect() {
  let temp = optionFrom.value;
  optionFrom.value = optionTo.value;
  optionTo.value = temp;
}

function showResult() {
  if (resultHtml.style.display === "none") {
    resultHtml.style.display = "flex";
  } else {
    resultHtml.style.display = "none";
  }
}

const URL = "https://api.exchangerate-api.com/v4/latest/USD";

let BRL, USD, EUR; // Variáveis globais

async function chamarApi() {
  const resp = await fetch(URL);
  if (resp.status === 200) {
    const data = await resp.json();
    BRL = data.rates.BRL;
    USD = data.rates.USD;
    EUR = data.rates.EUR;
  }
}

async function teste() {
  // primary logic convert
  // add R$ and more, in the final of the result
  await chamarApi();

  if (BRL && USD && EUR) {
    let finalResult;

    if (optionFrom.value === "brl" && optionTo.value === "usd") {
      finalResult = resultAmount.value / BRL;
      result.innerHTML = finalResult.toFixed(2);
      console.log(finalResult);
    } else if (optionFrom.value === "usd" && optionTo.value === "brl") {
      finalResult = resultAmount.value * BRL;
      result.innerHTML = finalResult.toFixed(2);
      console.log(finalResult);

    } else if (optionFrom.value === "brl" && optionTo.value === "eur") {
      finalResult = (resultAmount.value / BRL) * EUR;
      result.innerHTML = finalResult.toFixed(2);
      console.log(finalResult);
    } else if (optionFrom.value === "eur" && optionTo.value === "brl") {
      finalResult = (resultAmount.value * BRL) / EUR;
      result.innerHTML = finalResult.toFixed(2);

      console.log(finalResult);
    } else if (optionFrom.value === "brl" && optionTo.value === "brl") {
      finalResult = resultAmount.value;
      result.innerHTML = finalResult;
      console.log(finalResult);

    } else if (optionFrom.value === "eur" && optionTo.value === "usd") {
      finalResult = resultAmount.value / USD;
      result.innerHTML = finalResult.toFixed(2);
      console.log(finalResult);
    } else if (optionFrom.value === "usd" && optionTo.value === "eur") {
      finalResult = resultAmount.value / EUR;
      result.innerHTML = finalResult.toFixed(2);
      console.log(finalResult);

    } else if (optionFrom.value === "usd" && optionTo.value === "usd") {
      finalResult = resultAmount.value;
      result.innerHTML = finalResult;
      console.log(finalResult);

    } else if (optionFrom.value === "eur" && optionTo.value === "eur") {
      finalResult = resultAmount.value;
      result.innerHTML = finalResult;
      console.log(finalResult);
    } else {
      console.log("Error");
    }
  } else {
    console.log("Erro: as taxas de câmbio não foram carregadas");
  }

  // validation

  if (resultAmount.value) {
    showResult();
  } else {
    showResult();
    result.innerHTML = "Invalid";
  }
}
teste();
