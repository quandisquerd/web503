import cors from "cors";
import express from "express";
import productRouter from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
export const viteNodeApp = app;
