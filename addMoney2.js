document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputValueById("input-amount-add");
    const pinNumber = getInputValueById("input-pin");

    // wrong Way
    if (pinNumber === 1234) {
      const balance = getTextValueById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerHTML = newBalance;
    } else {
      alert("Failed to transfer Money!");
    }
  });
