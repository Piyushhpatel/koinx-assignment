import cron from 'node-cron';
import fetchCryptoData from "../jobs/fetchCryptoData.js";

// Schedule the job to run every 2 hours
function startCronJob() {
  cron.schedule('0 */2 * * *', async () => {
    console.log('Starting scheduled crypto data fetch...');
    await fetchCryptoData();
  });
  
  console.log('Cron job for fetching crypto data scheduled every 2 hours.');
}

export { startCronJob };
