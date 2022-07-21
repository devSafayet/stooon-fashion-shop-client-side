import React from 'react';

const Product = ({ product }) => {
    const { id, name, img, price } = product;
    return (
        <div class="card bg-base-100 shadow-xl m-2">
            <figure class="px-10 pt-10">
                <img src="" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;