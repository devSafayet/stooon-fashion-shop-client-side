import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products);
    return (
        <div className='text-center pb-20 bg-base-200'>
            <h1 className='tab tab-bordered tab-active text-2xl mt-6'>NEW ARRIVALS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 bg-base-200 lg:px-12'>
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

export default Products;