import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full mb-8">
            <div id="slide1" class="hero carousel-item relative banner-bg-1" >
                <div class="hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl">30% OFF</h1>
                        <h1 class="mb-5 mr-14 text-4xl font-semibold text-black">FAVOURITE CLOTHING </h1>

                        <button class="btn bg-white text-black hover:text-white">GET COLLECTION</button>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="hero min-h-screen carousel-item relative banner-bg-2" >
                <div class="hero-content text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-14 text-5xl pr-28">30% OFF</h1>

                        <button class="mt-14 btn bg-white text-black hover:text-white">GET COLLECTION</button>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;