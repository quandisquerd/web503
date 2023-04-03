import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { uploadImage } from "../controllers/uploadCloudinary";

const router = express.Router();
cloudinary.config({
    cloud_name: "ecommercer2021",
    api_key: "626155946999554",
    api_secret: "7VZ2gYWaR0ZWKGfd55uBPIjEnso",
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "WE17301",
        format: "png",
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.array("images", 10), uploadImage);
export default router;
