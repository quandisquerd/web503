// Cài đặt nodejs, default đã có rất package hỗ trợ

// cú pháp ES5
const http = require("http");

const server = http.createServer((req, res) => {
    const products = [
        { name: "Iphone 12", price: 2000 },
        { name: "Iphone 11000", price: 1000 },
    ];
    products.push({ name: "Iphone 10", price: 500 });
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`<html>
                    <body>
                        <form action="/products" method="post">
                            <input type="text" name="name" />
                            <button>Submit</button>
                        </form>
                    </body>
                </html>`);
    }
    if (req.url == "/products" && req.method == "POST") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
});
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// npm init -y
// npm i nodemon -D
// "start": "nodemon app.js"
