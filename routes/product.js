import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
const router = express.Router();

router.get("/api/products", getAll);
router.get("/api/products/:id", get);
router.post("/api/products", create);
router.delete("/api/products/:id", remove);
router.patch("/api/products/:id", update);

export default router;
