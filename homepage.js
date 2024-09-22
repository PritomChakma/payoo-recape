document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    console.log("add button");
    event.preventDefault();

    const addMoney = document.getElementById("input-amount-add").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("input-pin").value;

    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
