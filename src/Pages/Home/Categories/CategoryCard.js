import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div className=' w-96 bg-black shadow-xl '>
            <figure><img src={category.image} className='w-full h-52' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-white text-center">{category.title}</h2>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;