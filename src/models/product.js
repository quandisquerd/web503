import mongoose from "mongoose";
const productSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
