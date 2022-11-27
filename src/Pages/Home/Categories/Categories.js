import React, { useEffect, useState } from 'react';

// import asus from '../../../assets/images/categories/asus.jpg'
// import acer from '../../../assets/images/categories/acer.jpg'
// import mac from '../../../assets/images/categories/mac.jpg'
import CategoryCard from './CategoryCard';






const Categories = () => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    }, [])

    return (
        <div >
            <h2 className="text-3xl text-black text-center font-bold mt-10"> Browse Your Desire Categories</h2>
            <div className='card  mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}

                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Categories;