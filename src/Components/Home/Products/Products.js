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
        <div className='text-center pb-20'>
            <h1 className='tab tab-bordered tab-active text-2xl'>NEW ARRIVALS</h1>
            <div className='flex flex-wrap'>
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