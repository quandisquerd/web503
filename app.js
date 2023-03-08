const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    if (req.url == "/products") {
        res.end("Here are our products");
    }
});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
