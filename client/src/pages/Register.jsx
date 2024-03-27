import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authServices';
import toast from 'react-hot-toast';

const Register = () => {
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        if (auth) {
            navigate("/")
        }
    }, [])


    const navigate = useNavigate();
    const [regUser, setRegUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",

    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await registerUser(regUser)
            toast.success(result.message, { position: "top-center" })
            if (result.success) {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
            toast.error(error)
        }

    }
    const handleReset = () => {
        setRegUser({
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",

        })
    }



    return (
        <>

            <div className='flex justify-center'>
                <div className='w-[500px] shadow-xl rounded-md px-[40px] py-[15px] my-[30px] p-6'>
                    <form action="" onSubmit={handleSubmit} >
                        <h2 className='text-[25px] text-center m-4 text-red-500 font-serif'>Register Here</h2>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Name:</label>
                                <input
                                    onChange={(e) => setRegUser({ ...regUser, name: e.target.value })}
                                    value={regUser.name}
                                    name='name'
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="text"
                                    required={true} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Email:</label>
                                <input
                                    onChange={(e) => setRegUser({ ...regUser, email: e.target.value })}
                                    value={regUser.email}
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="email"
                                    name='email'
                                    required={true} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Phone:</label>
                                <input
                                    onChange={(e) => setRegUser({ ...regUser, phone: e.target.value })}
                                    value={regUser.phone}
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="text"
                                    name='phone'
                                    required={true} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Password:</label>
                                <input
                                    onChange={(e) => setRegUser({ ...regUser, password: e.target.value })}
                                    value={regUser.password}
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="password"
                                    name='password'
                                    required={true} />
                            </div>

                            <div>
                                <button type='submit' className='bg-blue-600 text-white px-[15px] py-[6px] rounded-md m-2'>Register</button>
                                <button type='button' onClick={handleReset} className='bg-red-500 text-white px-[15px] py-[6px] rounded-md m-2'>Reset</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Register
