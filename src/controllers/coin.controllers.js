import { Coin } from "../models/coin.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";

const getStats = asyncHandler(async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        throw new ApiError(400, "Coin is required");
    }

    const stats = await Coin.findOne({ coin }).sort({ createdAt: -1 });

    if (!stats) {
        throw new ApiError(404, "Coin not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {
            price: stats.currentPrice,
            marketCap: stats.marketCap,
            "24hChange": stats.Change24h,
        }, "Coin stats retrieved successfully")
    )
});

const getDeviation = asyncHandler(async (req, res) => {
    const {coin} = req.query;

    if (!coin) {
        throw new ApiError(400, "Coin is required");
    }

    const prices = await Coin.find({ coin }).sort({ createdAt: -1 }).select("currentPrice");

    if (prices.length === 0) {
        return res.status(404).json({ error: 'No data available for the requested cryptocurrency' });
    }

    const priceArray = prices.map((record) => record.currentPrice);
    const deviation = calculateStandardDeviation(priceArray);

    return res.status(200).json(new ApiResponse(200, { deviation }, "Standard deviation calculated successfully"));
});


//Helper Functions
function calculateStandardDeviation(prices) {
    const mean = prices.reduce((a, b) => a + b) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
    return Math.sqrt(variance);
}

export { getStats, getDeviation };