import React from 'react';

const Support = () => {
    return (
        <div className='m-auto mt-10 mb-12' style={{ width: "92%" }}>
            <div class="divider"></div>
            <div className='text-center justify-center p-12 lg:flex'>
                <div>
                    <i style={{ fontSize: "35px", color: "#F97316" }} class="fa fa-car"></i>
                    <h2 className=' text-2xl'>FREE SHIPPING, RETURN</h2>
                    <h3 style={{ color: "#DBD0CC" }}>Free Shipping On All US Orders</h3>
                </div>
                <div class="divider lg:divider-horizontal"></div>

                <div>
                    <i style={{ fontSize: "35px", color: "#F97316" }} class="fa fa-credit-card"></i>
                    <h2 className=' text-2xl'>MONEY BACK GUARANTEE</h2>
                    <h3 style={{ color: "#DBD0CC" }}>30 Days Money Back Guarantee</h3>
                </div>
                <div class="divider lg:divider-horizontal"></div>

                <div>
                    <i style={{ fontSize: "35px", color: "#F97316" }} class="fa fa-phone-volume"></i>
                    <h2 className=' text-2xl'>+880963-8557887</h2>
                    <h3 style={{ color: "#DBD0CC" }}>24/7 Days Support</h3>
                </div>
            </div>
            <div class="divider"></div>
        </div>
    );
};

export default Support;