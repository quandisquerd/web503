import express from "express";
import productRouter from "./routes/product";

const app = express();

// middleware
app.use(express.json());

// router
app.use("/api", productRouter);
// server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
