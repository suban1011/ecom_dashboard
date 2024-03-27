import express from "express"
import { addProductController, deleteProductController, getProductController, getSingleProduct, searchProduct, updateProductController } from "../controllers/productController.js";
import { verifyToken } from "../middleware/middleware.js";


const router = express.Router()


router.post("/add-product", addProductController)
router.get("/products", getProductController)
router.delete("/product/:id", deleteProductController)
router.get("/getproduct/:id", getSingleProduct)
router.put("/update-product/:id", updateProductController)
router.get("/search/:key", searchProduct)
export default router;