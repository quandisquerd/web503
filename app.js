const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
];

// import http from "http";

// const server = http.createServer((req, res) => {
//     const name = "Dat";
//     const body = [];
//     if (req.url == "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`<form action="/about" method="post">
//                 <input type="text" name="name"/>
//                 <button>Submit</button>
//             </form>
//         `);
//     }
//     if (req.url == "/about" && req.method == "POST") {
//         req.on("data", function (chunk) {
//             //= name"Dat"
//             body.push(chunk);
//         });
//         req.on("end", function () {
//             const bodyParse = Buffer.concat(body).toString().split("=")[1];
//             const value = {
//                 name: bodyParse,
//             };
//             console.log(value);
//         });
//         res.end(`<h1>hello ${name}</h1>`);
//     }
//     if (req.url == "/api/products") {
//         res.end(JSON.stringify(products));
//     }
// });
// server.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });

import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1>`);
});
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.post("/api/products", (req, res) => {
    res.status(201).json({
        message: "Product created",
        data: req.body,
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
