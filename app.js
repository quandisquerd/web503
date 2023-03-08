// import http from "http";

// const server = http.createServer((req, res) => {
//     const body = [];
//     const products = [
//         { id: 1, name: "Product A" },
//         { id: 2, name: "Product B" },
//         { id: 3, name: "Product C" },
//     ];
//     if (req.url === "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.end(`
//             <html>
//                 <body>
//                     <form action="/api/products" method="post">
//                         <input type="text" name="name" />
//                         <button>Submit</button>
//                     </form>
//                 </body>
//             </html>
//         `);
//     }
//     if (req.url == "/api/products" && req.method == "POST") {
//         req.on("data", function (chunk) {
//             body.push(chunk);
//         });
//         req.on("end", () => {
//             // name=product A
//             const bodyParse = Buffer.concat(body).toString();
//             // Product A
//             const data = bodyParse.split("=")[1];
//             // them vao products
//             products.push(data);
//             console.log(products);
//         });
//     }
// });

// server.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });

import express from "express";

// khởi tạo
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/api/products" method="post">
                    <input type="text" name="name" />
                    <button>Submit</button>
                </form>
            </body>
        </html>
    `);
});
app.post("/api/products", (req, res) => {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
