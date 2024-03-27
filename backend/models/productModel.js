import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        require: true,
    },
    userid: {
        type: String,
        required: true,
    },


}, { timestamps: true })

export const Product = mongoose.models.products || mongoose.model("products", productSchema);