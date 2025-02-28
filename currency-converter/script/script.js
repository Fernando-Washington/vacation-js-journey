let optionFrom = document.getElementById("optionFrom");
let optionTo = document.getElementById("optionTo");

function toggleSelect() {
  let temp = optionFrom.value;
  optionFrom.value = optionTo.value;
  optionTo.value = temp;
}
