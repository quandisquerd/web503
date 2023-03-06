import http from "http";

const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.end(`<h1>hello ${name}</h1>`);
    }
});
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// npm init -y
// npm i -D nodemon
// nodemon index.js
