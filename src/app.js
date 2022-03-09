const express = require("express");
const productRouter = require('./routes/product');

const app = express();
// middleware
app.use(express.json());

// Routing
app.use("/api", productRouter);

// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
