import React from 'react';

const Product = ({ product }) => {
    const { vendor, name, img, price } = product;
    return (
        <div class="card shadow-xl m-2">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h3 style={{ color: "#B5A4A7" }}>BRAND:{vendor}</h3>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-base-200" />
                </div>
                <h2 class="card-title">{name}</h2>
                <p className='text-orange-400 font-semibold text-xl'>${price}</p>
                <div class="card-actions">
                    <button class="btn bg-white text-black hover:bg-orange-400 hover:text-white">Buy Now
                        <i class="fa fa-cart-plus pl-1"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;