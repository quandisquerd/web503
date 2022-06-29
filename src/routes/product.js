import express from 'express';

const router = express.Router();
const data = [
    { id: 1, name: "product A" },
    { id: 2, name: "product B" },
];

router.get("/products", (req, res) => {
    res.json(data);
});
router.get("/products/:id", (req, res) => {
    console.log('thong tin params', req.params)
});
router.post("/products", (req, res) => {
    console.log('thong tin body', req.body)
});
router.put("/products", (req, res) => {
    console.log('thong tin body', req.body)
});
router.delete("/products", (req, res) => {
    console.log('thong tin body', req.body)
});

export default router;