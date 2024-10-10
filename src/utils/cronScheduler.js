import cron from 'node-cron';
import fetchCryptoData from '../jobs/fetchCryptoData.js';


async function startCronJob() {
    console.log('Fetching and storing crypto data on server start...');
    await fetchCryptoData();

    cron.schedule('0 */2 * * *', async () => {
        console.log('Scheduled task: Fetching and storing crypto data...');
        await fetchCryptoData();
    });

    console.log('Cron job scheduled to run every 2 hours.');
}

export {startCronJob}