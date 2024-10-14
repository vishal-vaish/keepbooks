"use client";

import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import ServiceCard from "@/components/Service/ServiceCard";

const Services = () => {
  return (
    <MaxWidthWrapperContainer>
      <div className="flex flex-col gap-3 text-center mt-[2.5rem] w-full font-roboto">
        <div className="font-semibold text-2xl">Services</div>
        <div className="text-paragraph text-3xl">Our Range of Accounting Services</div>
        <div className="text-gray text-base max-w-2xl mx-auto tracking-wider">
          Maxim Liberty provides specialized bookkeeping services tailored for small, medium, and large businesses to maintain accurate financial records.
        </div>
      </div>
      <ServiceCard/>
    </MaxWidthWrapperContainer>
  )
}
export default Services
