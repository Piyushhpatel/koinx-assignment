import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))

app.use(express.json());



//Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Koinx API");
});

//Routes
import coinRoutes from "./routes/coin.routes.js";

app.use("/api/v1/coin", coinRoutes);

export {app}