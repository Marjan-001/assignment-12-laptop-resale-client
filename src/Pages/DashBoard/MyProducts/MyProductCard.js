import React from 'react';

const MyProductCard = ({ myproduct }) => {
    const { product_name, seller, brand, price, location, purchased, condition, mobile, image } = myproduct;
    return (
        <div className=' w-96 bg-black shadow-xl '>
            <figure><img src={image} className='w-full h-52' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold text-white text-center">{product_name}</h2>
                <p className='text-white badge badge-secondary'>Resale-Price:${price}</p>
                <p className='text-white badge badge-secondary'>Product Brand:{brand}</p>
                <p className='text-white badge badge-secondary'>Product Condition:{condition}</p>

                <p className='text-white'>Seller Name:{seller}</p>
                <p className='text-white'>Contact:{mobile}</p>
                <p className='text-white'>Year of Purchased:{purchased}</p>
                <p className='text-white'>Location:{location}</p>


                <div className="card-actions justify-end">

                    <button className='btn btn-primary '>Advertise</button>
                    <button className='btn btn-primary '>Delete</button>

                </div>
            </div>

        </div>
    );
};

export default MyProductCard;