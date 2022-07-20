import React from 'react';
import Banner from './Banner/Banner';
import Collections from './Collections/Collections';
import Products from './Products/Products';
import Sale from './Sale/Sale';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collections />
            <Products />
            <Sale />
        </div>


    );
};

export default Home;