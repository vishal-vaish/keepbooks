import React from 'react'
import {blogsPostData} from "@/constant/data";
import Image from "next/image";
import CustomSlider from "@/components/CustomSlider";
import {Button} from "@/components/ui/button";

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 824,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 524,
    settings: {
      slidesToShow: 1,
    },
  }]

const BlogSlider = () => {
  const settings = {
    dots: false,
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
    <div className="slider-container">
      <CustomSlider
        settings={settings}
      >
        {blogsPostData.map((blog, index) => (
          <div
            key={index}
          >
            <div
              key={index}
              className="flex flex-col items-start bg-white rounded-lg m-2 font-roboto shadow-md overflow-hidden"
            >
              <Image src={blog.image} alt={blog.description} className="object-contain"/>
              <div className="p-3 font-roboto text-paragraph">
                <div>{blog.description}</div>
                <div className="text-primary py-5">{blog.date}</div>
              </div>
              <div className="p-4">
                <Button variant="secondary" className="px-5 py-3">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </div>
  )
}
export default BlogSlider
