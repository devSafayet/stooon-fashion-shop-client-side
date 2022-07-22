import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='text-center pb-20'>
            <h1 className='tab tab-bordered tab-active text-2xl mt-6'>NEW ARRIVALS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-12'>
                {
                    products.map((product) => <Product
                        key={products.id}
                        product={product}
                    >
                    </Product>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;