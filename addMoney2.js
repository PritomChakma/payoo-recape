document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputValueById("input-amount-add");
    const pinNumber = getInputValueById("input-pin");

    // inNaN validation on addMoney
    if (isNaN(addMoney)) {
      alert("faield to add Money");
      return;
    }

    // wrong Way
    if (pinNumber === 1234) {
      const balance = getTextValueById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerHTML = newBalance;

      // add to tranjection history
      const p = document.createElement("p");
      p.innerText = `Add Money:${addMoney}tk. New Balance: ${newBalance}`;

      // should be a common Function
      document.getElementById("tranjection-container").appendChild(p);
    } else {
      alert("Failed to transfer Money!");
    }
  });
