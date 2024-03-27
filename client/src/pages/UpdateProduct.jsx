import React, { useEffect, useState } from 'react'
import { getSingleProduct, updateProductAxios } from '../services/productService'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-hot-toast"
const UpdateProduct = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",

    })
    const updateProduct = async () => {
        try {
            const result = await updateProductAxios(id, product)
            if (result.success) {
                toast.success(result.message, { position: "top-center" })
                navigate("/products")
            }

        } catch (error) {
            console.log(error)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateProduct(id, product)

    }


    const param = useParams()
    const id = param.id;

    const getProduct = async () => {
        const result = await getSingleProduct(id)

        setProduct(result)
    }

    useEffect(() => {
        getProduct(id);
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='w-[500px] rounded-lg px-[50px] shadow-xl my-[100px]  py-[15px]'>
                <form action="" onSubmit={handleSubmit} >
                    <h2 className='text-[25px] font-serif text-center m-4 text-purple-600'>Update Product here !!</h2>
                    <div className="flex flex-col">

                        <div className="flex flex-col">
                            <label htmlFor="name" className='px-[10px] text-gray-600'>Name:</label>
                            <input
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                value={product.name}
                                className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                type="text"
                                name='name'
                                id='name'
                                required={true} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className='px-[10px] text-gray-600'>Price:</label>
                            <input
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                value={product.price}
                                className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                type="number"
                                name='price'
                                required={true} />
                        </div>
                        <div className="flex flex-col">
                            <select
                                onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                value={product.category}
                                name="category" id="" className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'>
                                <option value="" disabled>--selecte category--</option>
                                <option value="clothing">Clothing</option>
                                <option value="mobile">Mobile</option>
                                <option value="furniture">Furniture</option>
                                <option value="laptop">Laptop</option>
                                <option value="gamig">Gaming</option>

                            </select>

                        </div>




                        <div>
                            <button type='submit' className='bg-green-600 text-white px-[12px] py-[6px] rounded-md m-2'>Update Product</button>

                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
