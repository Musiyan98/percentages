const typeCard = document.getElementById('procent-valeu');
const amountDebit = document.getElementById('amount-debit');
const amountFill = document.getElementById('amount-fill');
const dateFill = document.getElementById('date-fill');
const inputValue = document.getElementById('send-value');

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


inputValue.addEventListener('click', consoleCheck)

function consoleCheck() {
   let procentValeu = Number(typeCard.value);
   let amountDebitValue = Number(amountDebit.value);
   let amountFillValue = Number(amountFill.value);
   let dateFillValue = Number(dateFill.value);

   console.log(procentValeu);
   console.log(amountDebitValue);
   console.log(amountFillValue);
   console.log(dateFillValue);
}