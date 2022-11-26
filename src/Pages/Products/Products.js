
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {

    const laptops = useLoaderData();


    return (
        <div>
            <h2 className='text-2xl text-black font-bold'>Products of {laptops[0].brand} Brand</h2>
            <div className='card mt-16 my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    laptops.map(laptop => <ProductsCard
                        key={laptop._id}
                        laptop={laptop}
                    ></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default Products;