import axios from 'axios';
import { Coin } from '../models/coin.model.js';

async function fetchCryptoData() {
  try {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const response = await axios.get(url, {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,matic-network',
      },
    });

    const coinsData = response.data;


    for (let coin of coinsData) {
      await Coin.findOneAndUpdate(
        { coin: coin.id }, 
        {
          currentPrice: coin.current_price, 
          marketCap: coin.market_cap, 
          Change24h: coin.price_change_percentage_24h, 
        },
        { upsert: true, new: true }
      );
    }

    console.log('Crypto data fetched and stored/updated successfully.');
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
}

export default fetchCryptoData;
