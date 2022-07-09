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


inputValue.addEventListener('click', createTable);

function createTable() {
   let procentTable = document.querySelector('.procent-calculation__info');
   let amountDebitValue = Number(amountDebit.value);
   let amountFillValue = Number(amountFill.value);

   while (amountDebitValue >= amountFillValue * -1) {
      let dateNow = new Date();
      date = new Date(dateNow.getMonth() + 1);
      dateModule(date, amountDebitValue, amountFillValue);
      amountDebitValue -= amountFillValue
    };
};



function testing() {
let date = new Date('06/01/2022');
dateModule(date)

};

function dateModule (date, amountDebitValue, amountFillValue) {
   let lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
   let lastDayOfMounth = Number(lastDayDate.getDate());
   let monthOfPeriod = new Date(date.getMonth() + 1, date.getFullYear());
   console.log(date.getMonth() + 1, date.getFullYear());
   console.log(monthOfPeriod);
   let cellDate = document.createElement('td');
   let cellTextDate = document.createTextNode(`${date.getMonth()+ 1} , ${date.getFullYear()}`);
   cellDate.appendChild(cellTextDate);

   calculation(lastDayOfMounth, cellDate, amountDebitValue, amountFillValue);
   return amountDebitValue;
};




function calculation (lastDayOfMounth, cellDate, amountDebitValue, amountFillValue) {
   let procentValeu = Number(typeCard.value);
   let dateFillValue = Number(dateFill.value);
   console.log(lastDayOfMounth);

   let daylyProcentRate = (procentValeu*12/365/100);
   let daylyProcentValueStart = Number((daylyProcentRate * amountDebitValue).toFixed(2));
   let daylyProcentValueEnd = Number(((amountDebitValue  - amountFillValue)* daylyProcentRate).toFixed(2));
   let mounthProcentValue = Number(((daylyProcentValueStart * dateFillValue) + (daylyProcentValueEnd * (lastDayOfMounth - dateFillValue)) ).toFixed(2));
   
   console.log(daylyProcentRate);
   console.log(daylyProcentValueStart);
   console.log(daylyProcentValueEnd);
   console.log(mounthProcentValue);

   let cellDebit = document.createElement('td');
   let cellTextDebit = document.createTextNode(amountDebitValue);
   cellDebit.appendChild(cellTextDebit);

   let cellProcent = document.createElement('td');
   let cellTextProcent = document.createTextNode(mounthProcentValue);
   cellProcent.appendChild(cellTextProcent);
   
   let cellSaldo = document.createElement('td');
   let cellTextSaldo = document.createTextNode(amountFillValue - mounthProcentValue);
   cellSaldo.appendChild(cellTextSaldo);

   let procentTable = document.querySelector('.procent-calculation__info');
   let row = document.createElement('tr');
   row.appendChild(cellDate);
   row.appendChild(cellDebit);
   row.appendChild(cellProcent);
   row.appendChild(cellSaldo);
   procentTable.appendChild(row); 
   amountDebitValue += mounthProcentValue;
   return amountDebitValue;

}; 
