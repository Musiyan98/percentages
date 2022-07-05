   let transferAmount = document.getElementById('transfer-amount');
   let inputValue = document.getElementById('send-value');
   let ownFundsValue = document.getElementById('own-funds');

   let transferValue =  transferAmount.value;
   let ownMoeyValue =  ownFundsValue.value;


   const tableLine = {
      tableTitle: document.querySelector('.commission-table__title'),
      amountPayment: document.querySelector('.amount-payment'),
      ownFunds: document.querySelector('.own-funds'),
      creditFunds: document.querySelector('.credit-funds'),
      totalCommission: document.querySelector('.total-commission'),
   };

   const amountPayment = {
      subtitle: document.getElementById('amount-payment-subtitle'),
      transferValue: document.getElementById('amount-payment-transfer-value'),
      commissionOnKu: document.getElementById('amount-payment-commission-on-ku'),
      commissionOnKdv: document.getElementById('amount-payment-commission-on-kdv'),
      commissionUkrBank: document.getElementById('amount-payment-commission-ukr-bank'),
      commissionForeignBank: document.getElementById('amount-payment-commission-foreign-bank'),
   };

   const ownFunds = {
      subtitle: document.getElementById('own-funds-subtitle'),
      transferValue: document.getElementById('own-funds-transfer-value'),
      commissionOnKu: document.getElementById('own-funds-commission-on-ku'),
      commissionOnKdv: document.getElementById('own-funds-commission-on-kdv'),
      commissionUkrBank: document.getElementById('own-funds-commission-ukr-bank'),
      commissionForeignBank: document.getElementById('own-funds-commission-foreign-bank'),
   };

   const creditFunds = {
      subtitle: document.getElementById('credit-funds-subtitle'),
      transferValue: document.getElementById('credits-funds-transfer-value'),
      commissionOnKu: document.getElementById('credits-funds-commission-on-ku'),
      commissionOnKdv: document.getElementById('credits-funds-commission-on-kdv'),
      commissionUkrBank: document.getElementById('credits-funds-commission-ukr-bank'),
      commissionForeignBank: document.getElementById('credits-funds-commission-foreign-bank'),
   };

   const totalCommission = {
      subtitle: document.getElementById('total-commission-subtitle'),
      transferValue: document.getElementById('total-commission-value'),
      commissionOnKu: document.getElementById('total-commission-on-ku'),
      commissionOnKdv: document.getElementById('total-commission-on-kdv'),
      commissionUkrBank: document.getElementById('total-commission-ukr-bank'),
      commissionForeignBank: document.getElementById('total-commission-foreign-bank'),
   };


   function  commisionTransferValueKDV () {

      let transferValue =  transferAmount.value;

      tableLine.tableTitle.innerHTML = "Комісії при переказі коштів з КДВ";
      document.querySelector('.own-funds').style.visibility = 'hidden';
      document.querySelector('.credit-funds').style.visibility = 'hidden';


      amountPayment.transferValue.innerHTML = transferValue;
      amountPayment.commissionOnKu.innerHTML = transferValue;
      totalCommission.commissionOnKu.innerHTML = (0);
   
   
      if (transferValue >= 5000) {
         amountPayment.commissionOnKdv.innerHTML = (Number(transferValue)+25).toFixed(2);
         totalCommission.commissionOnKdv.innerHTML = 25}
          
         else if (transferValue <= 0) {
            amountPayment.commissionOnKdv.innerHTML = '0';
            totalCommission.commissionOnKdv.innerHTML = 0;
         }
         else {
            amountPayment.commissionOnKdv.innerHTML = (Number(transferValue)/0.995).toFixed(2);
            totalCommission.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)-Number(transferValue)).toFixed(2)};
   
      if (transferValue >= 1000) {
         amountPayment.commissionUkrBank.innerHTML = (transferValue*1.005).toFixed(2);
         totalCommission.commissionUkrBank.innerHTML = (transferValue*0.005).toFixed(2)}
   
         else if (transferValue <= 0) {
            amountPayment.commissionUkrBank.innerHTML = '0';
            totalCommission.commissionUkrBank.innerHTML = 0;
         } 
         else {
            amountPayment.commissionUkrBank.innerHTML = (Number(transferValue)+5).toFixed(2);
            totalCommission.commissionUkrBank.innerHTML = 5
         };
            
      if (transferValue >= 2500) {
         amountPayment.commissionForeignBank.innerHTML = (transferValue*1.02).toFixed(2);
         totalCommission.commissionForeignBank.innerHTML = (transferValue*0.02).toFixed(2)
         } 
         else if (transferValue <= 0) {
            amountPayment.commissionForeignBank.innerHTML = '0';
            totalCommission.commissionForeignBank.innerHTML = 0;
         }
         else {
            amountPayment.commissionForeignBank.innerHTML = (Number(transferValue)+50).toFixed(2);
            totalCommission.commissionForeignBank.innerHTML = 50
         };
   
   };

   function  commisionTransferKUSelfMoney () {

      let transferValue =  transferAmount.value;

      tableLine.tableTitle.innerHTML = "Комісії при переказі коштів з КУ";
      document.querySelector('.own-funds').style.visibility = 'hidden';
      document.querySelector('.credit-funds').style.visibility = 'hidden';
      document.querySelector('.own-funds').style.height = '0';
      document.querySelector('.credit-funds').style.height = '0';

      amountPayment.transferValue.innerHTML = transferValue;
      amountPayment.commissionOnKu.innerHTML = transferValue;
      totalCommission.commissionOnKu.innerHTML = (0);
   
   
      if (transferValue >= 5000) {
         amountPayment.commissionOnKdv.innerHTML = (Number(transferValue)+25).toFixed(2);
         totalCommission.commissionOnKdv.innerHTML = 25}
          
         else if (transferValue <= 0) {
            amountPayment.commissionOnKdv.innerHTML = '0';
            totalCommission.commissionOnKdv.innerHTML = 0;
         }
         else {
            amountPayment.commissionOnKdv.innerHTML = (Number(transferValue)/0.995).toFixed(2);
            totalCommission.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)-Number(transferValue)).toFixed(2)};
   
      if (transferValue >= 1000) {
         amountPayment.commissionUkrBank.innerHTML = (transferValue*1.005).toFixed(2);
         totalCommission.commissionUkrBank.innerHTML = (transferValue*0.005).toFixed(2)}
   
         else if (transferValue <= 0) {
            amountPayment.commissionUkrBank.innerHTML = '0';
            totalCommission.commissionUkrBank.innerHTML = 0;
         } 
         else {
            amountPayment.commissionUkrBank.innerHTML = (Number(transferValue)+5).toFixed(2);
            totalCommission.commissionUkrBank.innerHTML = 5
         };
            
      if (transferValue >= 2500) {
         amountPayment.commissionForeignBank.innerHTML = (transferValue*1.02).toFixed(2);
         totalCommission.commissionForeignBank.innerHTML = (transferValue*0.02).toFixed(2)
         } 
         else if (transferValue <= 0) {
            amountPayment.commissionForeignBank.innerHTML = '0';
            totalCommission.commissionForeignBank.innerHTML = 0;
         }
         else {
            amountPayment.commissionForeignBank.innerHTML = (Number(transferValue)+50).toFixed(2);
            totalCommission.commissionForeignBank.innerHTML = 50
         };
   
   };

   function  commisionTransferKUCreditMoney () {

      let transferValue =  transferAmount.value;

      tableLine.tableTitle.innerHTML = "Комісії при переказі коштів з КУ";
      document.querySelector('.own-funds').style.visibility = 'visible';
      document.querySelector('.credit-funds').style.visibility = 'visible';
      document.querySelector('.own-funds').style.height = 'auto';
      document.querySelector('.credit-funds').style.height = 'auto';

      ownFunds.transferValue.innerHTML = 0;
      creditFunds.transferValue.innerHTML = 0;

      amountPayment.transferValue.innerHTML = transferValue;

      amountPayment.commissionOnKu.innerHTML = (transferValue * 1.03);
      creditFunds.commissionOnKu.innerHTML = (transferValue * 0.03);
      totalCommission.commissionOnKu.innerHTML = (transferValue * 0.03);
      
      if (transferValue >= 5000) {
         amountPayment.commissionOnKdv.innerHTML = ((Number(transferValue)+25)*1.03).toFixed(2);
         ownFunds.commissionOnKdv.innerHTML = 25;
         creditFunds.commissionOnKdv.innerHTML = ((Number(transferValue)+25) * 0.03).toFixed(2);
         totalCommission.commissionOnKdv.innerHTML = (((Number(transferValue)+25)*1.03) - Number(transferValue)).toFixed(2);
      }
         else if (transferValue <= 0) {
            amountPayment.commissionOnKdv.innerHTML = '0';
            ownFunds.commissionOnKdv.innerHTML = 0;
         }
         else {
            amountPayment.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)*1.03).toFixed(2);
            ownFunds.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)-Number(transferValue)).toFixed(2);
            creditFunds.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)*0.03).toFixed(2);
            totalCommission.commissionOnKdv.innerHTML = (((Number(transferValue)/0.995)*1.03) - Number(transferValue)).toFixed(2);
      };
   
      if (transferValue >= 1000) {
         amountPayment.commissionUkrBank.innerHTML = (transferValue*1.005*1.03).toFixed(2);
         ownFunds.commissionUkrBank.innerHTML = (transferValue*0.005).toFixed(2);
         creditFunds.commissionUkrBank.innerHTML = (((transferValue*0.005)+Number(transferValue))*0.03).toFixed(2);
         totalCommission.commissionUkrBank.innerHTML = (((transferValue*0.005)+Number(transferValue))*0.03+(transferValue*0.005)).toFixed(2);}
   
         else if (transferValue <= 0) {
            amountPayment.commissionUkrBank.innerHTML = '0';
            ownFunds.commissionUkrBank.innerHTML = 0;
         } 
         else {
            amountPayment.commissionUkrBank.innerHTML = ((Number(transferValue)+5)*1.03).toFixed(2);
            ownFunds.commissionUkrBank.innerHTML = 5;
            creditFunds.commissionUkrBank.innerHTML = ((Number(transferValue)+5)*0.03).toFixed(2);
            totalCommission.commissionUkrBank.innerHTML = ((Number(transferValue)+5)*0.03+5).toFixed(2);
      };
            

      if (transferValue >= 2500) {
         amountPayment.commissionForeignBank.innerHTML = (transferValue*1.02*1.03).toFixed(2);
         ownFunds.commissionForeignBank.innerHTML = (transferValue*0.02).toFixed(2);
         creditFunds.commissionForeignBank.innerHTML = (((transferValue*0.02)+Number(transferValue))*0.03).toFixed(2);
         totalCommission.commissionForeignBank.innerHTML = (((transferValue*0.02)+Number(transferValue))*0.03+(transferValue*0.02)).toFixed(2);}
   
         else if (transferValue <= 0) {
            amountPayment.commissionForeignBank.innerHTML = '0';
            ownFunds.commissionForeignBank.innerHTML = 0;
         }
         else {
            amountPayment.commissionForeignBank.innerHTML = ((Number(transferValue)+50)*1.03).toFixed(2);
            ownFunds.commissionForeignBank.innerHTML = 50;
            creditFunds.commissionForeignBank.innerHTML = ((Number(transferValue)+50)*0.03).toFixed(2);
            totalCommission.commissionForeignBank.innerHTML = ((Number(transferValue)+50)*0.03+50).toFixed(2);
      };
   };

   function  commisionTransferKUMixMoney () {

      let transferValue =  transferAmount.value;
      let selfMoney = ownFundsValue.value;
      let creditMoney = (transferAmount.value - ownFundsValue.value);

      ownFunds.transferValue.innerHTML = 'Частина переказу що піде в рахунок кредитного ліміту';
      creditFunds.transferValue.innerHTML = creditMoney;

      tableLine.tableTitle.innerHTML = "Комісії при переказі коштів з КУ";
      document.querySelector('.own-funds').style.visibility = 'visible';
      document.querySelector('.credit-funds').style.visibility = 'visible';
      document.querySelector('.own-funds').style.height = 'auto';
      document.querySelector('.credit-funds').style.height = 'auto';

      amountPayment.transferValue.innerHTML = transferValue;

      amountPayment.commissionOnKu.innerHTML = (creditMoney * 1.03 + Number(selfMoney)).toFixed(2);
      creditFunds.commissionOnKu.innerHTML = (creditMoney * 0.03).toFixed(2);
      totalCommission.commissionOnKu.innerHTML = (creditMoney * 0.03).toFixed(2);
      
      if (transferValue >= 5000) {
         amountPayment.commissionOnKdv.innerHTML = ((Number(creditMoney)+25)*1.03 + Number(selfMoney)).toFixed(2);
         ownFunds.commissionOnKdv.innerHTML = 25;
         creditFunds.commissionOnKdv.innerHTML = ((Number(creditMoney)+25) * 0.03).toFixed(2);
         totalCommission.commissionOnKdv.innerHTML = (((Number(creditMoney)+25)*0.03) + 25).toFixed(2);
      }
         else if (transferValue <= 0) {
            amountPayment.commissionOnKdv.innerHTML = '0';
            ownFunds.commissionOnKdv.innerHTML = 0;
         }
         else {
            amountPayment.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)+((Number(transferValue)/0.995)-Number(selfMoney))*0.03).toFixed(2);
            ownFunds.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995)-Number(transferValue)).toFixed(2);
            creditFunds.commissionOnKdv.innerHTML = (((Number(transferValue)/0.995)-Number(selfMoney))*0.03).toFixed(2);
            totalCommission.commissionOnKdv.innerHTML = ((Number(transferValue)/0.995-Number(selfMoney))*0.03+(Number(transferValue)/0.995-Number(transferValue))).toFixed(2);
      };
   
      if (transferValue >= 1000) {
         amountPayment.commissionUkrBank.innerHTML = ((transferValue*0.005 + Number(creditMoney))*0.03 + transferValue*1.005).toFixed(2);
         ownFunds.commissionUkrBank.innerHTML = (transferValue*0.005).toFixed(2);
         creditFunds.commissionUkrBank.innerHTML = ((transferValue*0.005 + Number(creditMoney))*0.03).toFixed(2);
         totalCommission.commissionUkrBank.innerHTML = ((transferValue*0.005 + Number(creditMoney))*0.03 + transferValue*0.005).toFixed(2);}
   
         else if (transferValue <= 0) {
            amountPayment.commissionUkrBank.innerHTML = '0';
            ownFunds.commissionUkrBank.innerHTML = 0;
         } 
         else {
            amountPayment.commissionUkrBank.innerHTML = ((Number(creditMoney)+5)*0.03+5+Number(transferValue)).toFixed(2);
            ownFunds.commissionUkrBank.innerHTML = 5;
            creditFunds.commissionUkrBank.innerHTML = ((Number(creditMoney)+5)*0.03).toFixed(2);
            totalCommission.commissionUkrBank.innerHTML = ((Number(creditMoney)+5)*0.03+5).toFixed(2);
      };
            

      if (transferValue >= 2500) {
         amountPayment.commissionForeignBank.innerHTML = ((transferValue*0.02 + Number(creditMoney))*0.03 + transferValue*1.02).toFixed(2);
         ownFunds.commissionForeignBank.innerHTML = (transferValue*0.02).toFixed(2);
         creditFunds.commissionForeignBank.innerHTML = ((transferValue*0.02 + Number(creditMoney))*0.03).toFixed(2);
         totalCommission.commissionForeignBank.innerHTML = ((transferValue*0.02 + Number(creditMoney))*0.03 + transferValue*0.02).toFixed(2);}
   
         else if (transferValue <= 0) {
            amountPayment.commissionForeignBank.innerHTML = '0';
            ownFunds.commissionForeignBank.innerHTML = 0;
         } 
         else {
            amountPayment.commissionForeignBank.innerHTML = ((Number(creditMoney)+50)*0.03+50+Number(transferValue)).toFixed(2);
            ownFunds.commissionForeignBank.innerHTML = 50;
            creditFunds.commissionForeignBank.innerHTML = ((Number(creditMoney)+50)*0.03).toFixed(2);
            totalCommission.commissionForeignBank.innerHTML = ((Number(creditMoney)+50)*0.03+50).toFixed(2);
      };
   };


   function selestTypeOfKUTransfer () {
      let typeOfMoney = document.querySelectorAll('.type-money');
      for (let i = 0; i < typeOfMoney.length; i++) {
         if (typeOfMoney[i].checked) {
            moneyType = typeOfMoney[i].value;
            break;
         }
      }
      // console.log(moneyType);
      if (moneyType == 'only-own-funds') {
         commisionTransferKUSelfMoney();
      // console.log('svoi');
      } else if (moneyType == 'only-credit-funds') {
         commisionTransferKUCreditMoney();
      // console.log('credit');
      } else {
         commisionTransferKUMixMoney();
         // console.log('mix');
      }
   }

   function selestTypeOfTransfer () {
      let cardType = document.getElementById('type-card');

      if (cardType.value == 'ku') {
         selestTypeOfKUTransfer();
      } else  if (cardType.value == 'kdv') {
         commisionTransferValueKDV();
      }
   };
   

   
   
   





   inputValue.addEventListener ('click', selestTypeOfTransfer);

   // function selectedTypeOfMoney () {
   //    let typeOfMoney = document.querySelectorAll('.type-money');
   //    if (typeOfMoney.cheked.value = 'only-own-funds') {
   //       commisionTransferKUSelfMoney ();
   //    }
   // };

