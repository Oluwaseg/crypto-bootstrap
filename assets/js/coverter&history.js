const cryptoPriceElement = document.getElementById("crypto-price");
const amountInput = document.getElementById("amount");
const cryptoSelector = document.getElementById("crypto-selector");
const convertedAmountElement = document.getElementById("converted-amount");

async function fetchCryptoPrice(symbol) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
    );
    const data = await response.json();

    if (data && data[symbol] && data[symbol].usd) {
      const cryptoPrice = parseFloat(data[symbol].usd);
      cryptoPriceElement.textContent = `$${cryptoPrice}`;
      convertCrypto();
    } else {
      cryptoPriceElement.textContent = "Price data unavailable";
    }
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    cryptoPriceElement.textContent = `Error fetching ${symbol} price`;
  }
}

function convertCrypto() {
  const amount = parseFloat(amountInput.value);
  const selectedCrypto = cryptoSelector.value;

  const conversionRates = {
    bitcoin: 1,
    ethereum: 0.03,
    litecoin: 0.01,
    ripple: 0.005,
    "bitcoin-cash": 0.015,
    cardano: 0.002,
    polkadot: 0.04,
    binancecoin: 0.02,
    stellar: 0.005,
    chainlink: 0.03,
  };

  let conversionRate = conversionRates[selectedCrypto];

  if (isNaN(conversionRate)) {
    conversionRate = 0;
  }

  const convertedAmount = amount * conversionRate;
  convertedAmountElement.textContent = `$${convertedAmount.toFixed(2)}`;
}
fetchCryptoPrice("bitcoin");

amountInput.addEventListener("input", convertCrypto);

cryptoSelector.addEventListener("change", () => {
  const selectedCrypto = cryptoSelector.value;
  fetchCryptoPrice(selectedCrypto);
});
