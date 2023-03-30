import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
