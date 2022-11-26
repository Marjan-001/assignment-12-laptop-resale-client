import React from 'react';

const Faq = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-10'>Frequently Asked Questions</h2>
            <div tabIndex={0} className="collapse group mt-10">
                <div className="collapse-title bg-black text-center text-xl text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    How to determine the Used product condition?
                </div>
                <div className="collapse-content bg-primary text-center text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    <p> The seller will include an unbiased note on the condition of the Used product. This information will be seen in the details of each offer. Each Used product will also be classified under one of the Offer Conditions by the Seller before listing. Please check these Offer Conditions and their descriptions.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse group mt-2">
                <div className="collapse-title bg-black text-center text-xl text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    Is there a manufacturer warranty on these products?
                </div>
                <div className="collapse-content bg-primary text-center text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    <p>All Used products with a manufacturer warranty must be classified under the Offer Condition "Refurbished" by the Seller on laptop swappers. Only products that carry a manufacturer warranty can be classified as Refurbished. Used products under any other Offer Condition may or may not carry a Seller warranty. In case such a warranty is applicable it will be called out in the detailed description of the offer. </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;