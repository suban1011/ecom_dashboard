import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../services/authServices';
import toast from 'react-hot-toast';



const Login = () => {
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("auth"))
        if (auth) {
            navigate("/")
        }
    }, [])


    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    })



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await userLogin(loginUser)
            if (result.success) {
                toast.success(result.message, { position: "top-center" })
                //local storage
                localStorage.setItem("auth", JSON.stringify(result))
                navigate("/")
            } else {
                toast.error(result.message, { position: "top-center" })
            }

        } catch (error) {
            console.log(error)
            toast.error(error, { position: "top-center" })
        }

    }
    const handleReset = () => {
        setLoginUser({
            email: "",
            password: "",

        })
    }

    return (
        <>

            <div className='flex justify-center'>
                <div className='w-[500px] rounded-lg px-[50px] shadow-xl my-[100px]  py-[15px]'>
                    <form action="" onSubmit={handleSubmit} >
                        <h2 className='text-[25px] font-serif text-center m-4 text-purple-600'>Login !!</h2>
                        <div className="flex flex-col">

                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Email:</label>
                                <input
                                    onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
                                    value={loginUser.email}
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="email"
                                    name='email'
                                    required={true} />
                            </div>



                            <div className="flex flex-col">
                                <label htmlFor="name" className='px-[10px] text-gray-600'>Password:</label>
                                <input
                                    onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                                    value={loginUser.password}
                                    className='w-[400px] border px-[5px] py-[4px] m-2 outline-none border-gray-300 rounded-md'
                                    type="password"
                                    name='password'
                                    required={true} />
                            </div>

                            <div>
                                <button type='submit' className='bg-blue-600 text-white px-[12px] py-[6px] rounded-md m-2'>Login</button>
                                <button onClick={handleReset} type='button' className='bg-red-500 text-white px-[12px] py-[6px] rounded-md m-2'>Reset</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
