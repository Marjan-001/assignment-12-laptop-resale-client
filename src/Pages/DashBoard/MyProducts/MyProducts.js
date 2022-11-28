import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const myproducts = useLoaderData();
    console.log(myproducts)
    return (
        <div>
            <h2 className='text-3xl mt-5 text-center font-bold'>My products</h2>
            <div className='card ml-10 mt-16 my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16'>
                {
                    myproducts?.length && myproducts?.map(myproduct => <MyProductCard key={myproduct._id} myproduct={myproduct}>

                    </MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;