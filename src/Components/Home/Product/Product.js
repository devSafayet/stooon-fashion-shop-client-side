import React from 'react';

const Product = ({ product }) => {
    const { vendor, name, img, price } = product;
    return (
        <div class="card shadow-xl m-2">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h3>BRAND:{vendor}</h3>
                <h2 class="card-title">{name}</h2>
                <p>${price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;