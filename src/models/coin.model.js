import mongoose from "mongoose";

const coinSchema = new mongoose.Schema(
    {
        coin: {
            type: String,
            required: true
        },
        currentPrice: {
            type: Number,
            required: true
        },
        marketCap: {
            type: Number,
            required: true
        },
        Change24h: {
            type: Number,
            required: true
        }
    }, 
    {timestamps: true}
);

export const Coin = mongoose.model("Coin", coinSchema);
