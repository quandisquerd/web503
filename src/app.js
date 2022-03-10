import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoute from '../routes/product';

const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use("/api",productRoute);

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})