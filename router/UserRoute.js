import express from "express";
import { getUser } from "../controller/UserController.js";

const router = express.Router();

router.get("/", getUser);

export default router;
