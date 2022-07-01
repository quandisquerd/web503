// const express = require("express");
import express from 'express';
import 'dotenv/config';

import routerProduct from './routes/product';

const app = express();

app.use(express.json());
app.use("/api",routerProduct);

app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công, cổng ' + process.env.PORT)
})

