import { json } from "express";
import { Product } from "../models/productModel.js";

export async function addProductController(req, rsp) {
    try {
        const { name, price, category, userid } = req.body;
        const product = new Product({ name, price, category, userid })
        const result = await product.save()
        rsp.status(200).send({
            message: "Product Add Successfully..!!",
            success: true,
        })
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "failed to add..!!",
            success: false
        })
    }
}


export async function getProductController(req, rsp) {
    try {
        const allProduct = await Product.find()

        rsp.status(200).send(allProduct)
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "failed to get Products",
            success: false
        })
    }
}

export async function deleteProductController(req, rsp) {
    try {
        const result = await Product.deleteOne({ _id: req.params.id })

        rsp.status(200).send({
            message: "Deleted Successfully..!!",
            success: true,
        })
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "failed to delete product",
            success: false
        })
    }
}
export async function getSingleProduct(req, rsp) {
    try {
        const product = await Product.findOne({ _id: req.params.id })

        if (product) {
            return rsp.send(product);

        }
        //  res.json(product);
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "product not found",
            success: false
        })
    }
}

export async function updateProductController(req, rsp) {
    try {
        const productId = req.params.id;
        const result = await Product.updateOne({ _id: productId }, {
            $set: req.body
        })
        rsp.status(200).send({
            message: "Updated successfully..!!",
            success: true,
        })
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "failed to update product",
            success: false
        })
    }
}

export async function searchProduct(req, rsp) {
    try {
        const query = req.params.key
        const regex = new RegExp(query, 'i');
        let result = await Product.find({
            "$or": [
                { name: regex },
                // { category: { $regex: req.params.key } },
                // { price: { $regex: req.params.key } },
            ]
        })

        rsp.status(200).send(result)
    } catch (error) {
        console.log(error)
        rsp.send({
            message: "failed to search product",
            success: false
        })
    }
}