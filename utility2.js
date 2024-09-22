function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextValueById(id) {
  const inputText = document.getElementById(id).innerText;
  const textNumber = parseFloat(inputText);
  return textNumber;
}

function shoeSectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("tranjection-history").classList.add("hidden");

  // show the form
  document.getElementById(id).classList.remove("hidden");
}
