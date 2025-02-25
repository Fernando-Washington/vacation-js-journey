function enebleResult() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let finalValue = document.getElementById("value");
  let idealWeight = document.getElementById("advice");
  let sum = (weight / (height * height)) * 10000;

// validação peso altura (verifica valor existente)

  if (weight && height){ // se tiver valor no peso e na altura, return true e executa
    finalValue.innerHTML = `${sum.toFixed(2)}`;
  } else {
    finalValue.innerHTML = 'valor inválido';
  }

// verifica média e retorna mensasgem de acordo com o peso

  if (sum <= 18.59) {
    idealWeight.innerHTML = 'Você está abaixo do peso!'
    idealWeight.style.color = 'red'
  } else if (sum >= 18.60 && sum < 24.99) {
    idealWeight.innerHTML = 'Você está no peso ideal!'
    idealWeight.style.color = 'green'
  } else if (sum >= 25.00 && sum <= 29.99) {
    idealWeight.innerHTML = 'Você está com sobrepeso!'
    idealWeight.style.color = 'yellow'
  } else if (idealWeight >= 30){
    idealWeight.innerHTML = 'Você está com obesidade!'
    idealWeight.style.color = 'red'
  } else {
    idealWeight.innerHTML = 'Insira um valor válido!'
  }

// ao clicar display block no resultado

  const resultDisplay = document.getElementById("result");

  if (resultDisplay.style.display === "none") {
    document.getElementById("result").style.display = "block";
  } else {
    document.getElementById("result").style.display = "none";
  }
  // fazer para treinar aqui não sera necessário o else por enquanto
  // peso / (altura x altura)
}
