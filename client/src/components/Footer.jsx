import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="w-[100%] py-8  bottom-0 px-[70px] bg-gray-800 text-white p-6 flex flex-col min-h-screen">
                <div className="container mx-auto flex justify-between">
                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-4">Company Name</h2>
                        <p className="text-sm">123 Main Street, Cityville, Country</p>
                        <p className="text-sm">info@company.com</p>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li className="text-sm"><a href="/">Home</a></li>
                            <li className="text-sm"><a href="/products">Products</a></li>
                            <li className="text-sm"><a href="/about">About Us</a></li>
                            <li className="text-sm"><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <Link to="#" className="text-sm">Facebook</Link>
                            <Link to="#" className="text-sm">Twitter</Link>
                            <Link to="#" className="text-sm">Instagram</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
