document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const addMoney = getInputValueById();
    // console.log("add money value", addMoney);

    const addMoney = getInputValueById("input-amount-add");
    const pinNumber = getInputValueById("input-pin");
    console.log(addMoney, pinNumber);
  });
