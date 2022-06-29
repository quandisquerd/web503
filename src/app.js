const express = require("express");
const app = express();

app.use(express.json());

const data = [
    { id: 1, name: "product A" },
    { id: 2, name: "product B" },
];

function checkMessage(req, res, next){
    const flag = true;
    if(!flag) return;
    next();
}
app.get('/hello', checkMessage, (req, res) => {
    console.log('ahihi');
})









app.get("/products", (req, res) => {
    console.log('thong tin req', req.query)
});
app.get("/products/:id", (req, res) => {
    console.log('thong tin params', req.params)
});
app.post("/products", (req, res) => {
    console.log('thong tin body', req.body)
});
app.listen(3000, () => {
    console.log('Kết nối thành công')
})

// const server = http.createServer((req, res) => {
//     if (req.url === "/products" && req.method == "GET") {
//         res.setHeader("Content-Type", "application/json");
//         const data = [
//             { id: 1, name: "product A" },
//             { id: 2, name: "product B" },
//         ];
//         res.end(JSON.stringify(data));
//     }
//     if(req.url ==='/products' && req.method == "POST")
// });

// server.listen(3001);
