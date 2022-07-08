const typeCard = document.getElementById('procent-valeu');
const amountDebit = document.getElementById('amount-debit');
const amountFill = document.getElementById('amount-fill');
const dateFill = document.getElementById('date-fill');
const inputValue = document.getElementById('send-value');
// const procentTable = document.getElementsByClassName('procent-calculation__info');

const totalProcent = {
   amountDebit: document.getElementById('total-procent-amount-debit'),
   lastDate: document.getElementById('total-procent-last-date'),
   totalTime: document.getElementById('total-procent-total-time'),
   totalValue: document.getElementById('total-procent-total-value'),
};

// let procentValeu = Number(typeCard.value);
// let amountDebitValue = Number(amountDebit.value);
// let amountFillValue = Number(amountFill.value);
// let dateFillValue = Number(dateFill.value);


inputValue.addEventListener('click', calculation);

function consoleCheck() {
   let procentValeu = Number(typeCard.value);
   let amountDebitValue = Number(amountDebit.value);
   let amountFillValue = Number(amountFill.value);
   let dateFillValue = Number(dateFill.value);

   console.log(procentValeu);
   console.log(amountDebitValue);
   console.log(amountFillValue);
   console.log(dateFillValue);
};

function createTable() {
   let procentTable = document.querySelector('.procent-calculation__info');

   for (let r = 0; r <= 3; r++) {
      let row = document.createElement('tr');

      for (let i = 0; i <= 3; i++) {
         let cell = document.createElement('td');
         let cellText = document.createTextNode(`${r}, ${i}`);

         cell.appendChild(cellText);
         row.appendChild(cell);
         procentTable.appendChild(row);
      }
   }
};



function dateExample () {
let date = new Date();
let lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let lastDayOfMounth = Number(lastDayDate);



console.log(lastDayDate.getDate());
console.log(lastDayDate.getMonth() + 1);
console.log(lastDayDate.getMonth() + 1, lastDayDate.getFullYear());
};


function examole () {
   let date = new Date()
   calculation (date);
};

function calculation (date) {
   let procentValeu = Number(typeCard.value);
   let amountDebitValue = Number(amountDebit.value);
   let amountFillValue = Number(amountFill.value);
   let dateFillValue = Number(dateFill.value);
   let dateDay = new Date();
   var date = new Date();
   var lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
   let lastDayOfMounth = Number(lastDayDate.setDate() +1);

   console.log(date);
   console.log(lastDayDate);
   console.log(lastDayOfMounth);




   let daylyProcentRate = (procentValeu*12/365/100);
   let daylyProcentValueStart = Number((daylyProcentRate * amountDebitValue).toFixed(2));
   let daylyProcentValueEnd = Number(((amountDebitValue  - amountFillValue)* daylyProcentRate).toFixed(2));
   let mounthProcentValue = Number(((daylyProcentValueStart * dateFillValue) + (daylyProcentValueEnd * (lastDayOfMounth - dateFillValue)) ).toFixed(2));

};