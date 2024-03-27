import React from 'react';
import bg from "../assets/images/banner.jpg"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }} className="bg-gray-300 py-[50px] h-[500px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">

                    <div className="order-2 mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto">
                        <div className="ml-4">
                            <h2 className=" text-[30px] font-bold">Welcome to Our Store!</h2>
                            <p className="text-[18px]">Discover our latest collection and enjoy special offers.</p>
                        </div>
                        <button
                            type="button"
                            className=" px-6 py-3 border border-transparent text-base font-medium rounded-lg m-3 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
