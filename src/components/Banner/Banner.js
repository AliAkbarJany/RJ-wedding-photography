import React from 'react';

import banner from '../../image/banner.png'
const Banner = () => {
    return (
        <div>
            
            <div className='w-100% mt-3'>
                <img className='w-100%' src={banner} alt="" />
            </div>
            <button>click here</button>
        </div>
    );
};

export default Banner;