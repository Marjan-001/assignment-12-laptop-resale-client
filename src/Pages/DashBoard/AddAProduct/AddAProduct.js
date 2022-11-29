
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const { data: brands = [], isLoading } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-laptop-resale-server.vercel.app/brand');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const myProducts = {
                        product_name: data.pro_name,
                        seller: data.seller,
                        brand: data.name,
                        price: data.price,
                        location: data.location,
                        purchased: data.purchased,
                        condition: data.condition,
                        mobile: data.phone,
                        email: user.email,
                        image: imgData.data.url



                    }
                    fetch('https://assignment-12-laptop-resale-server.vercel.app/addedproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(myProducts)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.pro_name} is added successfully`);
                            navigate('/dashboard/myproducts/:email')
                        })
                }
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("pro_name", {
                        required: "Name is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.pro_name && <p className='text-red-500'>{errors.pro_name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("seller", {
                        required: "Name is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.seller && <p className='text-red-500'>{errors.seller.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Email</span></label>
                    <input type="text" defaultValue={user?.email} className="input input-bordered border-blue-700 w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('name')}
                        className="select input-bordered border-blue-700 w-full max-w-xs">
                        {
                            brands.map(brand => <option
                                key={brand._id}
                                value={brand.brand}
                            >{brand.name}</option>)
                        }


                    </select>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: "Condition is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: "Price is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile Number</span></label>
                    <input type="text" {...register("phone", {
                        required: "Phone Number is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of purchased</span></label>
                    <input type="text" {...register("purchased", {
                        required: "Year of purchased is Required"
                    })} className="input input-bordered border-blue-700 w-full max-w-xs" />
                    {errors.purchased && <p className='text-red-500'>{errors.purchased.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered border-blue-700 py-20 w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;