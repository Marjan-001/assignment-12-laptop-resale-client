import React from 'react';

const ProductsCard = ({ laptop }) => {

    const { product_name, seller_name, posted_time, location, image, resale_price, original_price, used_time } = laptop;
    console.log(product_name)
    return (
        <div className=' w-96 bg-black shadow-xl '>
            <figure><img src={image} className='w-full h-52' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold text-white text-center">{product_name}</h2>
                <p className='text-white'>Resale-Price:${resale_price}</p>
                <p className='text-white'>Original-Price:${original_price}</p>
                <p className='text-white'>Used For:{used_time}</p>
                <p className='text-white'>Location:{location}</p>
                <p className='text-white'>Seller Name:{seller_name}</p>
                <p className='text-white'>Post-Time:{posted_time}</p>


                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;