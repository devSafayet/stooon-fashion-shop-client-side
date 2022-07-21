import React from 'react';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import Collections from './Collections/Collections';
import OfferImg from './OfferImg/OfferImg';
import Products from './Products/Products';
import Sale from './Sale/Sale';
import Subcribes from './Subcribes/Subcribes';
import TraindProducts from './TraindProducts/TraindProducts';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collections />
            <Products />
            <Sale />
            <TraindProducts />
            <Collection />
            <OfferImg />
            <Subcribes />
        </div>


    );
};

export default Home;