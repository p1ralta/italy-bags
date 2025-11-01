import express from "express";
import { getBags } from "../controllers/bags";

const router = express.Router();

router.get("/", getBags);

export default router;
