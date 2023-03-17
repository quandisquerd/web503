import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product";
import mongoose from "mongoose";

dotenv.config();

// khởi tạo
const app = express();

app.use(express.json());

app.use("/api", productRouter);

mongoose.connect(process.env.URI);

export const viteNodeApp = app;
