import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'


const Header = () => {
    const auth = JSON.parse(localStorage.getItem("auth"))
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login")
    }
    return (
        <>
            <nav className='flex justify-between bg-[#063970] text-gray-300 px-[80px] py-1 text-[18px] items-center shadow-2xl'>
                <div className=""><img src={logo} width={50} alt='logo'></img></div>
                <ul className='flex gap-5 '>

                    {
                        auth ? (<>
                            <li className='nav-Link'><Link to={"/"}>Home</Link></li>
                            {/* <li className='nav-Link'><Link to={"dashboard"}>Dashboard</Link></li> */}
                            <li className='nav-Link'><Link to={"add-product"}>Add Products</Link></li>
                            <li className='nav-Link'><Link to={"products"}>Product List</Link></li>
                            {/* <li className='nav-Link'><Link to={"policy"}>Policy</Link></li> */}

                        </>) : (<></>)
                    }

                </ul>

                <div>
                    <ul className='flex gap-5'>


                        {
                            !auth ? (
                                <>
                                    <li><Link to={"login"}>Login</Link></li>
                                    <li><Link to={"register"}>Sign up</Link></li>
                                </>
                            ) : (<>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </>)
                        }

                    </ul>
                </div>
            </nav >
        </>
    )
}

export default Header
