import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/product";

dotenv.config();
const app = express();

app.use(productRouter);
// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());

app.listen(process.env.PORT, function () {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// try/catch
// npm i dotenv --save
// npm i concurrently -g
// routes -> sử dụng express.Router
// controllers
