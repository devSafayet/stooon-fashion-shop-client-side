import React from 'react';
import { Link } from 'react-router-dom';
import './Collection.css';

const Collection = () => {
    return (
        <div className='text-center'>
            <h1 className='text-center font-semibold text-2xl tab tab-bordered tab-active'>COLLECTION</h1>
            <div className='justify-center grid grid-cols-1 lg:grid-cols-2 gap-2 m-10'>
                <div class="hero p-32 bg-img1">
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl font-semibold text-black">FASHION CLOTHING</h1>
                            <button class="btn bg-white text-black hover:bg-black hover:text-white pr-6 pl-6"><Link to="/shop"> SHOP NOW
                                <i class="fa fa-cart-plus pl-1"></i>
                            </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="hero p-32 bg-img2">
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-3xl font-semibold text-black">ACCESSORIES</h1>
                            <button class="btn bg-white text-black hover:bg-black hover:text-white pr-6 pl-6"><Link to="/shop"> SHOP NOW
                                <i class="fa fa-cart-plus pl-1"></i>
                            </Link>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;