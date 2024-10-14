"use client";

import React from 'react';
import {testimonialsClientItems} from "@/constant/data";
import {Star} from 'lucide-react';
import CustomSlider from "@/components/CustomSlider";

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 1,
    },
  }]

const StarsContainer = ({rating}: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex justify-center mb-8 mt-5">
      {Array.from({length: totalStars}, (_, index) => (
        <span key={index}>
          {index < rating ? (
            <Star className="w-5 h-5 text-gray-500 fill-yellow-300"/>
          ) : (
            <Star className="w-5 h-5 text-gray-500"/>
          )}
        </span>
      ))}
    </div>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    arrows: false,
    responsive: responsive,
  };

  return (
    <>
      <div className="slider-container">
        <CustomSlider
          settings={settings}
        >
          {testimonialsClientItems.map((item) => (
            <div
              key={item.id}
            >
              <div
                key={item.id}
                className="flex flex-col items-start bg-white rounded-lg py-3 bg-black-bg p-7 m-5 font-roboto shadow-md"
              >
                <StarsContainer rating={item.rating}/>
                <div className="text-sm text-paragraph tracking-normal">
                  {item.title}
                </div>
                <p className="text-md font-semibold capitalize mt-8">{item.name}</p>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    </>
  );
};

export default TestimonialSlider;
