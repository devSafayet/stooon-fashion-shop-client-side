import React from 'react';
import img1 from '../../../images/instagram/1 (1).png';
import img2 from '../../../images/instagram/2.png';
import img3 from '../../../images/instagram/3.png';
import img4 from '../../../images/instagram/4.png';
import img5 from '../../../images/instagram/5.png';
import img6 from '../../../images/instagram/6.png';

const Instagram = () => {
    return (
        <div className='text-center mt-12 mb-10'>
            <h1 className='text-2xl'><span className="text-orange-500">@ <a href="#">FOLLOW</a></span> US ON INSTAGRAM</h1>
            <h3 className='text-xl' style={{ color: "#DBD0CC" }}>shop our instagram</h3>
            <div className='pt-8 pb-10 flex justify-center' >
                <img style={{ width: "15%" }} src={img1} alt="" />
                <img style={{ width: "15%" }} src={img2} alt="" />
                <img style={{ width: "15%" }} src={img3} alt="" />
                <img style={{ width: "15%" }} src={img4} alt="" />
                <img style={{ width: "15%" }} src={img5} alt="" />
                <img style={{ width: "15%" }} src={img6} alt="" />
            </div>
        </div>
    );
};

export default Instagram;