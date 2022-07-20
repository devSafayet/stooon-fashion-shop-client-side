import React from 'react';
import woman from '../../../images/woman-collect.png';
import man from '../../../images/man-collect.png';
import kids from '../../../images/kids-collect.png';

const Collections = () => {
    return (
        <div className='container mx-auto px-4 lg:flex justify-between'>
            <img src={woman} alt="" />
            <img src={man} alt="" />
            <img src={kids} alt="" />
        </div>
    );
};

export default Collections;