"use client";

import React from 'react'
import {carouselClientItems} from "@/constant/data";
import Image from 'next/image';
import CustomSlider from "@/components/CustomSlider";

const responsive = [
  {
    breakpoint: 1324,
    settings: {
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 464,
    settings: {
      slidesToShow: 1,
    },
  }]

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    arrows: false,
    responsive: responsive,
  };

  return (
    <div className="slider-container">
      <CustomSlider
        settings={settings}
      >
        {carouselClientItems.map((item) => (
          <div
            key={item.id}
            className="p-4 text-center"
          >
            <div key={item.id} className="flex flex-col items-center bg-white rounded-lg py-3">
              <Image
                src={item.logo}
                alt={item.title}
                width={100}
                height={100}
                objectFit="cover"
              />
              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </CustomSlider>
    </div>
  )
}
export default ClientSlider
