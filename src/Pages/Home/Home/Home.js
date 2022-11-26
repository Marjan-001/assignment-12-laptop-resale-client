import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Faq from '../FAQ/Faq';

const Home = () => {
    return (
        <div className='my-10'>

            <Banner></Banner>
            <Categories></Categories>
            <Faq></Faq>
        </div>
    );
};

export default Home;