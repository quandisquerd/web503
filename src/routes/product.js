import { Router } from "express";
import { create, list, destroy, show, update } from "../controllers/product";

const router = Router();

router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.patch("/products", update);
router.delete("/products", destroy);
export default router;
