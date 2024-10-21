# Koinx Assignment (Cryptocurrency Price Tracker)

This project implements a cryptocurrency tracker that fetches and stores real-time data for Bitcoin, Ethereum, and Matic from the CoinGecko API.

## Features

1. **Background Job**: A scheduled job runs every 2 hours to fetch the latest price, market cap, and 24-hour percentage change of Bitcoin, Ethereum, and Matic from the CoinGecko API and stores them in a MongoDB database.
2. **/stats API**: Fetches the latest cryptocurrency data (price, market cap, and 24h change).
3. **/deviation API**: Calculates and returns the standard deviation of the price of a cryptocurrency based on the last 100 stored records (or fewer if less data is available).

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or above)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas for cloud database)
- [CoinGecko API](https://www.coingecko.com/en/api) (No API key required)

---

## Installation

1. **Clone the repository**:

   ```bash
   https://github.com/Piyushhpatel/koinx-assignment.git

   cd koinx-assignment
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables use .env.sample for refrence:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

5. **Run the background job**:
   The background job will automatically start and run every 2 hours to fetch and store the latest cryptocurrency data.

6. **Access the APIs**:
   - **/stats**: Fetch the latest cryptocurrency data.
   - **/deviation**: Calculate and return the standard deviation of the price of a cryptocurrency based on the last 100 stored records.

---

### APIs

Find the complete API Doc Here
https://documenter.getpostman.com/view/38038026/2sAXxQeXiU


#### Endpoint:

```
 Deployed: https://koinx-assignment-vg4n.onrender.com/api/v1/coin
 Local : http://localhost:${port}/api/v1/coin
```

#### /stats API

Fetches the latest price, market cap, and 24-hour change for a specified cryptocurrency (Bitcoin, Ethereum, or Matic).

- **Endpoint**: `GET /stats`
- **Query Params**:
  - `coin` (required): Either `bitcoin`, `ethereum`, or `matic-network`
- **Sample Request**:
  ```bash
  GET /stats?coin=bitcoin
  ```
- **Sample Respone**:
  ```bash
  {
  	price: 40000,
  	marketCap: 800000000,
  	"24hChange": 3.4
  }
  ```

#### /deviation API

Calculates the standard deviation of the price of a cryptocurrency based on the last 100 records (or fewer if there are less than 100 records available).

- **Endpoint**: `GET /deviation`
- **Query Params**:
  - `coin` (required): Either `bitcoin`, `ethereum`, or `matic-network`
- **Sample Request**:
  ```bash
  GET /deviation?coin=bitcoin
  ```
- **Sample Respone**:
  ```bash
  {
  	deviation: 4082.48
  }
  ```

NOTE: The project is hosted on render. The backgroud job is working fine in local but is not working on deployment as it is hosted on free service on rendern and after 15 minutes of inactivity free instances goes to sleep so Job doesn't work in it however in local setup you can check the working of job functionality as well
