document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const CashOutMoney = getInputValueById("input-amount-cashout");
    const pinNumber = getInputValueById("input-cashout-pin");

    if (pinNumber === 1234) {
      const balance = getTextValueById("account-balance");
      const newBalance = balance - CashOutMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed CashOut");
    }
  });
