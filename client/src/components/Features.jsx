import React from 'react'
import img from "../assets/banner.svg"
const Features = () => {

    return (
        <div className="bg-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-full md:w-1/2 flex items-center">
                        <img
                            className="h-16 w-auto"
                            src={img}
                            alt="Banner Image"
                        />
                        <div className="ml-4">
                            <h2 className=" text-lg font-bold">Welcome to Our Store!</h2>
                            <p className="">Discover our latest collection and enjoy special offers.</p>
                        </div>
                    </div>
                    <div className="order-2 mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto">
                        <button
                            type="button"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <svg className="h-6 w-6 text-green-500 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Free Shipping</h3>
                            <p className="text-gray-600">Enjoy free shipping on all orders over $50.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <svg className="h-6 w-6 text-green-500 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">Easy Returns</h3>
                            <p className="text-gray-600">Return items hassle-free within 30 days.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <svg className="h-6 w-6 text-green-500 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">24/7 Support</h3>
                            <p className="text-gray-600">Our support team is available around the clock.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
