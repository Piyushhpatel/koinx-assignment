import { app } from "./app.js";
import connectDb from "./database/connectdb.js"
import dotenv from "dotenv"
import { startCronJob } from "./utils/cronScheduler.js";
dotenv.config();

const port = process.env.PORT

connectDb().then(() => {
    startCronJob();

    app.listen(port, () => {
        console.log("Server running at port :", port);
    })
}).catch((error) => {
    console.log(error.message);
})