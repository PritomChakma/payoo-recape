document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const CashOutMoney = getInputValueById("input-amount-cashout");
    const pinNumber = getInputValueById("input-cashout-pin");

    // inNaN validation on addMoney
    if (isNaN(CashOutMoney)) {
      alert("faield to Cash Out");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextValueById("account-balance");

      if (CashOutMoney > balance) {
        alert("You Do not Have Enough Money");
        return;
      }
      const newBalance = balance - CashOutMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // add to tranjection history

      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h1 class="text-2xl font-bold">Cash Out</h1>
      <p> ${CashOutMoney} withdraw. New Balance: ${newBalance}</p>
      `;
      document.getElementById("tranjection-container").appendChild(div);
    } else {
      alert("failed CashOut");
    }
  });
