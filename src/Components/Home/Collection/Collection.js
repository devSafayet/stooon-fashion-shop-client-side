import React from 'react';
import './Collection.css';

const Collection = () => {
    return (
        <div>
            <h1 className='text-center font-semibold text-4xl'>COLLECTION</h1>
            <div className='justify-center grid grid-cols-1 lg:grid-cols-2 gap-2 m-10'>
                <div class="hero min-h-screen bg-img1">
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl font-semibold">FASHION CLOTHING</h1>
                            <button class="btn bg-white text-black">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div class="hero min-h-screen bg-img2">
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl font-semibold">ACCESSORIES</h1>
                            <button class="btn bg-white text-black">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;