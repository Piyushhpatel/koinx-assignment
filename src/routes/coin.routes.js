import { Router } from "express";
import { getStats, getDeviation } from "../controllers/coin.controllers";

const router = Router();

router.route("/stats").get(getStats);
router.route("/deviation").get(getDeviation);

export default router;