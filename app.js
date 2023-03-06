const http = require("http");

const server = http.createServer(function (req, res) {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
    ];

    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`<form action="/products" method="post">
            <input type="text" placeholder="Product Name" name="productName" />
            <button>Submit</button>
        </form>`);
    }

    if (req.url == "/products") {
        res.setHeader("Content-Type", "application/json");
        products.push({ id: 3, name: "Product 3" });
        res.end(JSON.stringify(products));
    }
});

server.listen(8080, function () {
    console.log("Server is running port 8080");
});
// npm init -y
// npm install nodemon -D
// "start": "nodemon app.js"
