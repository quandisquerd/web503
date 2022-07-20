import express from "express";
import { add, list, read, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";

const router = express.Router();

router.get("/products", list);
router.get("/products/:id", read);
router.post("/products/:userId", requireSignin, isAuth, isAdmin, add);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);

router.param("userId", userById);

export default router;
