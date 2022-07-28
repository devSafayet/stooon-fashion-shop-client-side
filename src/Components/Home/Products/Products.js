import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import 'font-awesome/css/font-awesome.min.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // console.log(products);
    const cardProducts = products.slice(0, 6);
    return (
        <div className='text-center pb-16'>
            <h1 className='tab tab-bordered tab-active text-2xl mt-6'>NEW ARRIVALS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  lg:px-12'>
                {
                    cardProducts.map((product) => <Product
                        key={products.id}
                        product={product}
                    >
                    </Product>
                    )
                }
            </div>
            <div className='see-btn mt-5'>
                <Link to="/shop" className='btn bg-white pr-20 pl-20 pt-3 hover:bg-orange-300 hover:text-white pb-3 text-black rounded'>View more+</Link>
            </div>
        </div>
    );
};

export default Products;