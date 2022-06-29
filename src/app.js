// const express = require("express");
import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

const data = [
    { id: 1, name: "product A" },
    { id: 2, name: "product B" },
];

app.get("/products", (req, res) => {
    console.log('thong tin req', req.query)
});
app.get("/products/:id", (req, res) => {
    console.log('thong tin params', req.params)
});
app.post("/products", (req, res) => {
    console.log('thong tin body', req.body)
});


app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công')
})

