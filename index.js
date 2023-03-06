import http from "http";

const server = http.createServer((req, res) => {
    const name = "Dat";
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(`<form action="/about" method="post">
                <input type="text" name="name"/>
                <button>Submit</button>
            </form>
        `);
    }
    if (req.url == "/about" && req.method == "POST") {
        res.end(`<h1>hello ${name}</h1>`);
    }
});
server.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// npm init -y
// npm i -D nodemon
// nodemon index.js
// http://github.com/datlt2306/web503
// polytuts.vercel.app
// horbt4w

//
// /products?_sort=price&_order=desc
