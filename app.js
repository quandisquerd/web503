const http = require("http");

const server = http.createServer(function (req, res) {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ];
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1>Welcome to our home page</h1>`);
    }
    if (req.url === "/api/products") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
});
server.listen(8080, function () {
    console.log("Server running on port 8080");
});
