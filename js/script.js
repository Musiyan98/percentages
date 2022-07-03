
let transferAmount = document.getElementById('transfer-amount');
let inputValue = document.getElementById('send-value');

const kdv = {
   transferValueKdv: document.getElementById('transfer-value-kdv'),
   commissionOnKu: document.getElementById('commission-on-ku'),
   commissioOonKdv: document.getElementById('commission-on-kdv'),
   commissionUkrBank: document.getElementById('commission-ukr-bank'),
   commissionForeignBank: document.getElementById('commission-foreign-bank'),
};

// console.log(transferValue);
inputValue.addEventListener('click', commisionTransferValue)

function  commisionTransferValue () { 
   let transferValue =  transferAmount.value;
   console.log(transferValue); 

   kdv.transferValueKdv.innerHTML = transferValue;
   kdv.commissionOnKu.innerHTML = transferValue;

   if (transferValue >= 5000) {
      kdv.commissioOonKdv.innerHTML = (Number(transferValue)+25).toFixed(2)} 
      else if (transferValue <= 0) {
         kdv.commissioOonKdv.innerHTML = '0'
      }
      else {
         kdv.commissioOonKdv.innerHTML = (Number(transferValue)/0.995).toFixed(2)};

   if (transferValue >= 1000) {
      kdv.commissionUkrBank.innerHTML = (transferValue*1.005).toFixed(2)}
      else if (transferValue <= 0) {
         kdv.commissionUkrBank.innerHTML = '0'
      } 
      else {
         kdv.commissionUkrBank.innerHTML = (Number(transferValue)+5).toFixed(2)};
         
   if (transferValue >= 2500) {
      kdv.commissionForeignBank.innerHTML = (transferValue*1.02).toFixed(2)} 
      else if (transferValue <= 0) {
         kdv.commissionForeignBank.innerHTML = '0'
      }
      else {
         kdv.commissionForeignBank.innerHTML = (Number(transferValue)+50).toFixed(2)};

};
