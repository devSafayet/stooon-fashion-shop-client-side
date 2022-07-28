import React from 'react';

const Subcribes = () => {
    return (
        <div className='bg-base-300 m-12 text-center' style={{ backgroundColor: "#A6A6A6" }}>
            <h1 className='pt-12 pb-6 text-4xl text-white '>KEEP CONNECTED</h1>
            <h5 className='text-2xl text-white pt-6 pb-12 '>Get updates by subscribe our weekly newsletter</h5>
            <div class="form-control ">
                <div class="input-group justify-center pt-5 pb-12">
                    <input type="text" placeholder="Enter Address" class="input input-bordered lg:pr-10 lg:pl-10" />
                    <button class="btn text-white" style={{ backgroundColor: "#A6A6A6" }}>
                        SUBCRIBE
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Subcribes;