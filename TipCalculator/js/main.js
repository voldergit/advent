const calculateBtn = document.querySelector("#calculate");
const tipAmount = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-per-person");
const billAmount = document.querySelector("#bill-amount");
const numberOfPeople = document.querySelector("#number-of-people");

calculateBtn.onclick = () => {
  const valueBillAmount =
    Number(billAmount.value) >= 0 ? Number(billAmount.value) : 0;
  const valueNumberOfPeople =
    Number(numberOfPeople.value) >= 1 ? Number(numberOfPeople.value) : 1;
  const tipChecked = document.querySelector('input[name="tip"]:checked');
  const tipPercentage =
    tipChecked == null ? 0 : parseInt(tipChecked.value) / 100;
  const totalTip = Math.round(valueBillAmount * tipPercentage * 100) / 100;
  tipAmount.innerText = totalTip;
  totalPerPerson.innerText =
    Math.round(((valueBillAmount + totalTip) / valueNumberOfPeople) * 100) /
    100;
};
