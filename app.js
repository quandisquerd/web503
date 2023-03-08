// Cài đặt nodejs, default đã có rất package hỗ trợ

// cú pháp ES5
// const http = require("http");

// const server = http.createServer((req, res) => {
//     const products = [
//         { name: "Iphone 12", price: 2000 },
//         { name: "Iphone 11000", price: 1000 },
//     ];
//     products.push({ name: "Iphone 10", price: 500 });
//     // routing
//     if (req.url == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`<html>
//                     <body>
//                         <form action="/products" method="post">
//                             <input type="text" name="name" />
//                             <button>Submit</button>
//                         </form>
//                     </body>
//                 </html>`);
//     }
//     if (req.url == "/products" && req.method == "POST") {
//         const body = [];
//         req.on("data", function (chunk) {
//             body.push(chunk);
//         });
//         req.on("end", function () {
//             const bodyParse = Buffer.concat(body).toString();
//             console.log(bodyParse);
//         });
//     }
// });
// server.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });

// npm init -y
// npm i nodemon -D
// "start": "nodemon app.js"

import express from "express";

const app = express();
// chạy trước khi nhận dữ liệu
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send(`
    <html>
    <body>
        <form action="/products" method="post">
            <input type="text" name="name" />
            <button>Submit</button>
        </form>
    </body>
    </html>
    `);
});

app.post("/products", function (req, res) {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
