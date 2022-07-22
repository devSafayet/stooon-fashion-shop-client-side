import React from 'react';
import './Collections.css';

const Collections = () => {
    return (
        <div className='container mx-auto px-12 lg:flex justify-between mb-7'>
            <div class="hero woman pt-5 pb-5 pr-10 mr-2 sm:mb-3">

                <div class="hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-2 text-4xl text-black hover:text-white">Woman</h1>
                        <h1 class="mb-5 text-2xl text-black hover:text-white">Collection</h1>
                        <button class="text-black">view collection</button>
                    </div>
                </div>
            </div>
            <div class="hero man pt-5 pb-5 pr-10 mr-2 sm:mb-3">

                <div class="hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-2 text-4xl text-black hover:text-white">Woman</h1>
                        <h1 class="mb-5 text-2xl text-black hover:text-white">Collection</h1>
                        <button class="text-black">view collection</button>
                    </div>
                </div>
            </div>
            <div class="hero kids pt-5 pb-5 mr-2 sm:mb-3">
                <div class="hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-2 text-4xl text-black hover:text-base-300">Woman</h1>
                        <h1 class="mb-5 text-2xl text-black hover:text-base-300">Collection</h1>
                        <button class="text-black">view collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;