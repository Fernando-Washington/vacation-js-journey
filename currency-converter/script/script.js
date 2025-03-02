let optionFrom = document.getElementById("optionFrom");
let optionTo = document.getElementById("optionTo");
let resultAmount = document.getElementById("amountInput");
let result = document.getElementById("result");
let resultHtml = document.querySelector(".result-container");

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

function teste() {
  // primary logic convert
  // add R$ and more, in the final of the result

  if (optionFrom.value === "brl" && optionTo.value === "usd") {
    finalResult = resultAmount.value / 5.88;
    result.innerHTML = finalResult.toFixed(2);
    console.log(finalResult);
  } else if (optionFrom.value === "usd" && optionTo.value === "brl") {
    finalResult = resultAmount.value * 5.88;
    result.innerHTML = finalResult.toFixed(2);
    console.log(finalResult);
  } else if (optionFrom.value === "brl" && optionTo.value === "eur") {
    finalResult = resultAmount.value / 6.105;
    result.innerHTML = finalResult.toFixed(2);
    console.log(finalResult);
  } else if (optionFrom.value === "eur" && optionTo.value === "brl") {
    finalResult = resultAmount.value * 6.105;
    result.innerHTML = finalResult.toFixed(2);
    console.log(finalResult);
  } else if (optionFrom.value === "brl" && optionTo.value === "brl") {
    finalResult = resultAmount.value;
    result.innerHTML = finalResult;
    console.log(finalResult);
  } else if (optionFrom.value === "eur" && optionTo.value === "usd") {
    finalResult = resultAmount.value / 0.9639;
    result.innerHTML = finalResult.toFixed(2);
    console.log(finalResult);
  } else if (optionFrom.value === "usd" && optionTo.value === "eur") {
    finalResult = resultAmount.value / 1.038;
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

  // validation 

  if (resultAmount.value) {
   showResult()
  } else {
    showResult()
    result.innerHTML = 'Invalid'
  }

}