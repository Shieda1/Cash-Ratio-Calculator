// https://calculator.swiftutors.com/cash-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cashRatioRadio = document.getElementById('cashRatioRadio');
const cashRadio = document.getElementById('cashRadio');
const marketableSecuritiesRadio = document.getElementById('marketableSecuritiesRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let cashRatio;
let cash = v1;
let marketableSecurities = v2;
let currentLiabilities = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

cashRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash';
  variable2.textContent = 'Marketable Securities';
  variable3.textContent = 'Current Liabilities';
  cash = v1;
  marketableSecurities = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

cashRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Ratio';
  variable2.textContent = 'Marketable Securities';
  variable3.textContent = 'Current Liabilities';
  cashRatio = v1;
  marketableSecurities = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

marketableSecuritiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Ratio';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Current Liabilities';
  cashRatio = v1;
  cash = v2;
  currentLiabilities = v3;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash Ratio';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Marketable Securities';
  cashRatio = v1;
  cash = v2;
  marketableSecurities = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cashRatioRadio.checked)
    result.textContent = `Cash Ratio = ${computeCashRatio().toFixed(2)}`;

  else if(cashRadio.checked)
    result.textContent = `Cash = ${computeCash().toFixed(2)}`;

  else if(marketableSecuritiesRadio.checked)
    result.textContent = `Marketable Securities = ${computeMarketableSecurities().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

function computeCashRatio() {
  return (Number(cash.value) + Number(marketableSecurities.value)) / Number(currentLiabilities.value);
}

function computeCash() {
  return (Number(cashRatio.value) * Number(currentLiabilities.value)) - Number(marketableSecurities.value);
}

function computeMarketableSecurities() {
  return (Number(cashRatio.value) * Number(currentLiabilities.value)) - Number(cash.value);
}

function computeCurrentLiabilities() {
  return (Number(cash.value) + Number(marketableSecurities.value)) / Number(cashRatio.value);
}