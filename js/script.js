
let transferAmount = document.getElementById('transfer-amount');
let inputValue = document.getElementById('send-value');

const kdv = {
   transferValueKdv: document.getElementById('transfer-value-kdv'),
   commissionOnKu: document.getElementById('commission-on-ku'),
   commissioOonKdv: document.getElementById('commission-on-kdv'),
   commissionUkrBank: document.getElementById('commission-ukr-bank'),
   commissionForeignBank: document.getElementById('commission-foreign-bank'),
};
const kdvCommision = {
   transferValueKdv: document.getElementById('transfer-value-kdv-commision'),
   commissionOnKu: document.getElementById('commission-on-ku-commision'),
   commissioOonKdv: document.getElementById('commission-on-kdv-commision'),
   commissionUkrBank: document.getElementById('commission-ukr-bank-commision'),
   commissionForeignBank: document.getElementById('commission-foreign-bank-commision'),
};

// console.log(transferValue);
inputValue.addEventListener('click', commisionTransferValue)

function  commisionTransferValue () { 
   let transferValue =  transferAmount.value;
   console.log(transferValue); 

   kdv.transferValueKdv.innerHTML = transferValue;
   kdv.commissionOnKu.innerHTML = transferValue;
   kdvCommision.commissionOnKu.innerHTML = (0);


   if (transferValue >= 5000) {
      kdv.commissioOonKdv.innerHTML = (Number(transferValue)+25).toFixed(2);
      kdvCommision.commissioOonKdv.innerHTML = 25}
       
      else if (transferValue <= 0) {
         kdv.commissioOonKdv.innerHTML = '0';
         kdvCommision.commissioOonKdv.innerHTML = 0;
      }
      else {
         kdv.commissioOonKdv.innerHTML = (Number(transferValue)/0.995).toFixed(2);
         kdvCommision.commissioOonKdv.innerHTML = ((Number(transferValue)/0.995)-Number(transferValue)).toFixed(2)};

   if (transferValue >= 1000) {
      kdv.commissionUkrBank.innerHTML = (transferValue*1.005).toFixed(2);
      kdvCommision.commissionUkrBank.innerHTML = (transferValue*0.005).toFixed(2)}

      else if (transferValue <= 0) {
         kdv.commissionUkrBank.innerHTML = '0';
         kdvCommision.commissionUkrBank.innerHTML = 0;
      } 
      else {
         kdv.commissionUkrBank.innerHTML = (Number(transferValue)+5).toFixed(2);
         kdvCommision.commissionUkrBank.innerHTML = 5
      };
         
   if (transferValue >= 2500) {
      kdv.commissionForeignBank.innerHTML = (transferValue*1.02).toFixed(2);
      kdvCommision.commissionForeignBank.innerHTML = (transferValue*0.02).toFixed(2)
      } 
      else if (transferValue <= 0) {
         kdv.commissionForeignBank.innerHTML = '0';
         kdvCommision.commissionForeignBank.innerHTML = 0;
      }
      else {
         kdv.commissionForeignBank.innerHTML = (Number(transferValue)+50).toFixed(2);
         kdvCommision.commissionForeignBank.innerHTML = 50
      };

   //       kdvCommision.commissionOnKu.innerHTML = (Number(kdv.commissionOnKu) - Number(transferValue));
   //       kdvCommision.commissioOonKdv.innerHTML = (Number(kdv.commissioOonKdv) - Number(transferValue));
   //       kdvCommision.commissionUkrBank.innerHTML = (Number(kdv.commissionUkrBank) - Number(transferValue));
   //       kdvCommision.commissionForeignBank.innerHTML = (Number(kdv.commissionForeignBank) - Number(transferValue));
};
