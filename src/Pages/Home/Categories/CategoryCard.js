import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ category }) => {
    const { category_id } = category;
    return (
        <div className=' w-96 bg-black shadow-xl '>
            <figure><img src={category.img} className='w-full h-52' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-white text-center">{category.name}</h2>

                <div className="card-actions justify-end">
                    <Link
                        to={`/categories/${category_id}`}
                    ><button className="btn btn-primary">See All</button></Link>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;