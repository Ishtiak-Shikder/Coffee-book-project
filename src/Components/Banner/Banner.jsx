import React from 'react';
import banner from "../../assets/download (4).jfif"

const Banner = () => {
    return (
      <div className = "hero">
       <img className='w-[900px] h-[700px]' src={banner} alt="" />
      </div>
    );
};

export default Banner;