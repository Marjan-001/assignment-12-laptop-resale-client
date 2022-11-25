import React from 'react';
import banner from '../../../assets/images/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='laptop' />
                <div>
                    <h1 className="text-5xl text-center text-black leading-loose font-bold">Buy & Sell <br /> Second-hand Laptops</h1>
                    <p className="text-xl py-6">Welcome to <strong>laptop swappers</strong>. Here you can buy second hand laptops in a reasonable price and also can sell your used laptop.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;