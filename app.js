const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
];

// const http = require("http");

// const server = http.createServer(function (req, res) {

//     // routing - router
//     if (req.url == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`<form action="/products" method="post">
//             <input type="text" placeholder="Product Name" name="productName" />
//             <button>Submit</button>
//         </form>`);
//     }

//     if (req.url == "/products" && req.method == "POST") {
//         const body = [];
//         req.on("data", function (chunk) {
//             body.push(chunk);
//         });
//         req.on("end", function () {
//             const bodyParse = Buffer.concat(body).toString();
//             console.log(bodyParse.split("="));
//             const user = {
//                 name: bodyParse.split("=")[1],
//             };
//             res.end(JSON.stringify(user));
//         });
//     }
// });

// server.listen(8080, function () {
//     console.log("Server is running port 8080");
// });
// npm init -y
// npm install nodemon -D
// "start": "nodemon app.js"
// 3 loại lỗi:
// 1. SyntaxError: Unexpected token < in JSON at position 0
// 2. logic error
// 3. runtime error

import express from "express";

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.send(`<form action="/products" method="post">
            <input type="text" placeholder="Product Name" name="productName" />
            <button>Submit</button>
        </form>`);
});
app.get("/products", function (req, res) {
    res.json(products);
});
app.post("/products", (req, res) => {
    console.log(req.body);
});
app.listen(8080, function () {
    console.log("Server is running port 8080");
});
