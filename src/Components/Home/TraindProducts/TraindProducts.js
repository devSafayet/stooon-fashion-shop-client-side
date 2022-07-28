import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const TraindProducts = () => {
    const [trandProduct, setTrandProducts] = useState([]);
    useEffect(() => {
        fetch('trandingProduct.json')
            .then(res => res.json())
            .then(data => setTrandProducts(data))
    }, []);
    return (
        <div className='mt-5 text-center mb-10'>
            <h1 className='text-center font-semibold text-2xl tab tab-bordered tab-active'>TRANDING NOW</h1>
            <div class="btn-group justify-center mt-10 pl-10 pr-10">
                <button class="btn bg-black ps-2 pe-2">BEST SELLER</button>
                <button class="btn btn-disabled bg-white text-black ps-2 pe-2">TOP RATE</button>
                <button class="btn btn-disabled bg-white text-black ps-2 pe-2">TOP SALE</button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  lg:px-12'>
                {
                    trandProduct.map((product) => <Product
                        key={trandProduct.id}
                        product={product}
                    >
                    </Product>
                    )
                }
            </div>

        </div>

    );
};

export default TraindProducts;