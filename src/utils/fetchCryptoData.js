import axios from "axios";

//Function to fetch data from coingecko might change cause coingecko api is not free
async function fetchCryptoData() {
  try {
    const url = "https://api.coingecko.com/api/v3/coins/markets";
    const response = await axios.get(url, {
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,matic-network",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error in fetching crypto data", error.message);
  }
}

export { fetchCryptoData };
