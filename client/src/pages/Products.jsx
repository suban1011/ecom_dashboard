import React, { useEffect, useState } from 'react'
import { deleteProductAxios, getProductAxios, searchProductAxios } from '../services/productService'
import { toast } from "react-hot-toast"
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'

const Products = () => {

    const [product, setProduct] = useState([])
    async function fetchProduct() {
        try {
            const result = await getProductAxios()
            setProduct(result)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchProduct()

    }, [])
    const deleteProduct = async (id) => {
        try {
            const result = await deleteProductAxios(id)
            if (result.success) {
                toast.success(result.message, { position: "top-center" })
                fetchProduct()
            }


        } catch (error) {
            console.log(error)
        }
    }
    const handleRemove = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });


    }


    const handleSearch = async (e) => {
        let key = e.target.value;
        if (key) {
            const result = await searchProductAxios(key)
            setProduct(result)
        } else {
            fetchProduct();
        }

    }
    return (
        <div className='pt-[20px]'>

            <input type='text ' placeholder='Search products' className='p-3 m-3 border rounded-md md:w-[400px] mx-[50px] outline-none' onChange={handleSearch} />
            <table className='w-[100%] text-center'>
                <thead>

                    <tr className='shadow-md font-bold text-[20px] border-t-4'>
                        <td className='py-[20px]'>S.N</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pro, index) => (

                            <tr key={pro._id} className='border border-b-2 '>
                                <td className='py-[20px] px-[30px]'>{index + 1}</td>
                                <td>{pro.name}</td>
                                <td>{pro.price}</td>
                                <td>{pro.category}</td>
                                <td>
                                    <button className='bg-blue-600 text-white px-[12px] py-[6px] rounded-md m-2'><Link to={`/update-product/${pro._id}`}>Edit</Link></button>
                                    <button className='bg-red-500 text-white px-[12px] py-[6px] rounded-md m-2' onClick={() => handleRemove(pro._id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>


            </div>
        </div >
    )
}

export default Products
