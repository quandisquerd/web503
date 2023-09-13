import express from "express";
import connect from "./connect";
import cors from "cors";


const app = express();

// middleware
app.use(express.json());
app.use(cors());

// router


connect.connect((err) => {
    if (err) {
        console.log('That bai !');
    }
    console.log('Thanh cong');
})



export const viteNodeApp = app;