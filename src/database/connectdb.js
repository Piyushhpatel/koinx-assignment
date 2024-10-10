import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongoURI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        const instance = await mongoose.connect(`${mongoURI}/${DB_NAME}`);
        console.log("Connected to database at host: ", instance.connection.host);
    } catch (error) {
        console.log("Error in connecting to database", error.message);
    }
}

export default connectDb;