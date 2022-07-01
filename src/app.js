// const express = require("express");
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import routerProduct from './routes/product';

const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use("/api",routerProduct);

app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công, cổng ' + process.env.PORT)
})

