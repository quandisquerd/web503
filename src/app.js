import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product";

dotenv.config();
const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());

// router
app.use(productRouter);

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}`);
});

export const viteNodeApp = app;
