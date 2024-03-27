import { httpAxios } from "./helpers/HttpAxioisHelper";

export async function addProductAxios(product) {
    const result = await httpAxios.post("/product/add-product", product).then(response => response.data)
    return result;
}

export async function getProductAxios() {
    const result = await httpAxios.get("/product/products").then(response => response.data)
    return result;
}
export async function deleteProductAxios(id) {
    const result = await httpAxios.delete("/product/product/" + id).then(response => response.data)
    return result;
}
export async function getSingleProduct(id) {
    const result = await httpAxios.get("product/getproduct/" + id).then(response => response.data)
    return result;
}
export async function updateProductAxios(id, product) {
    const result = await httpAxios.put("product/update-product/" + id, product).then(response => response.data)
    return result;
}

export async function searchProductAxios(key) {
    const result = await httpAxios.get("product/search/" + key).then(response => response.data)
    return result;
}