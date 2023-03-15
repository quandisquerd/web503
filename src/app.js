import express from "express";
import productRouter from "./routes/product";
import mongoose from "mongoose";
const app = express();

// middleware
app.use(express.json());

// router
app.use("/api", productRouter);
// server

mongoose.connect("mongodb://localhost:27017/we17307");
export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
