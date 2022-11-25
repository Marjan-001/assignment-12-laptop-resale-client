import React from 'react';
import asus from '../../../assets/images/categories/asus.jpg'
import acer from '../../../assets/images/categories/acer.jpg'
import mac from '../../../assets/images/categories/mac.jpg'
import CategoryCard from './CategoryCard';
const Categories = () => {
    const categoryData = [
        {
            id: 1,
            image: asus,
            title: "Asus"
        },
        {
            id: 2,
            image: acer,
            title: "Acer"
        },
        {
            id: 3,
            image: mac,
            title: "MacBook"
        }
    ]
    return (
        <div>
            <h2 className="text-3xl text-black text-center font-bold mt-10"> Choose Your Desire Brand Products</h2>
            <div className='card mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categoryData.map(category => <CategoryCard
                        key={category.id}
                        category={category}

                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;