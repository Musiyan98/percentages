
let transferAmount = document.getElementById('transfer-amount');
let inputValue = document.getElementById('send-value');


// inputValue.addEventListener('click', commisionTransferValueKDV)
inputValue.addEventListener('click', commisionTransferValueKU)

const kdv = {
   transferValueKdv: document.getElementById('transfer-value-kdv'),
   commissionOnKu: document.getElementById('kdv-commission-on-ku'),
   commissioOonKdv: document.getElementById('kdv-commission-on-kdv'),
   commissionUkrBank: document.getElementById('kdv-commission-ukr-bank'),
   commissionForeignBank: document.getElementById('kdv-commission-foreign-bank'),
};
const kdvCommision = {
   transferValueKdv: document.getElementById('transfer-value-kdv-commision'),
   commissionOnKu: document.getElementById('kdv-commission-on-ku-commision'),
   commissioOonKdv: document.getElementById('kdv-commission-on-kdv-commision'),
   commissionUkrBank: document.getElementById('kdv-commission-ukr-bank-commision'),
   commissionForeignBank: document.getElementById('kdv-commission-foreign-bank-commision'),
};

function  commisionTransferValueKDV () {

   let transferValue =  transferAmount.value;

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

};

const kuSumOwnFunds = {
   valueTransfer: document.getElementById('own-funds-ku-transfer-value-ku'),
   commissionOnKu: document.getElementById('own-funds-ku-commission-on-ku'),
   commissionOnKdv: document.getElementById('own-funds-ku-commission-on-kdv'),
   commissionUkrBank: document.getElementById('own-funds-ku-commission-ukr-bank'),
   commissionForeignBank: document.getElementById('own-funds-ku-commission-foreign-bank'),   
};

const kuSumCreditFunds = {
   valueTransfer: document.getElementById('credits-funds-ku-transfer-value-ku'),
   commissionOnKu: document.getElementById('credits-funds-ku-commission-on-ku'),   
   commissionOnKdv: document.getElementById('credits-funds-ku-commission-on-kdv'),
   commissionUkrBank: document.getElementById('credits-funds-ku-commission-ukr-bank'),
   commissionForeignBank: document.getElementById('credits-funds-ku-commission-foreign-bank'),   
};

const kuTotalCommissionValue = {
   valueTransfer: document.getElementById('total-ku-transfer-value-ku'),   
   commissionOnKu: document.getElementById('total-ku-commission-on-ku'),
   commissionOnKdv: document.getElementById('total-ku-commission-on-kdv'),
   commissionUkrBank: document.getElementById('total-ku-commission-ukr-bank'),
   commissionForeignBank: document.getElementById('total-ku-commission-foreign-bank'),   
};

function commisionTransferValueKU () {

};


const sumOwnFunds ={
valueTransfer: document.getElementById('own-funds-transfer-value'),
commissionOnKu: document.getElementById('own-funds-ku-commission-on-ku'),
commissionOnKdv: document.getElementById('own-funds-ku-commission-on-kdv'),
commissionUkrBank: document.getElementById('own-funds-ku-commission-ukr-bank'),
commissionForeignBank: document.getElementById('own-funds-ku-commission-foreign-bank'),
};
const sumCreditFunds ={
valueTransfer: document.getElementById('credits-funds-transfer-value'),
commissionOnKu: document.getElementById('credits-funds-commission-on-ku'),
commissionOnKdv: document.getElementById('credits-funds-commission-on-kdv'),
commissionUkrBank: document.getElementById('credits-funds-commission-ukr-bank'),
commissionForeignBank: document.getElementById('credits-funds-commission-foreign-bank'),
};
const totalCommissionValue ={
valueTransfer: document.getElementById('total-transfer-value'),
commissionOnKu: document.getElementById('total-commission-on-ku'),
commissionOnKdv: document.getElementById('total-commission-on-kdv'),
commissionUkrBank: document.getElementById('total-commission-ukr-bank'),
commissionForeignBank: document.getElementById('total-commission-foreign-bank'),
};
