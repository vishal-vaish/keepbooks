"use client";

import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import ServiceCard from "@/components/Service/ServiceCard";
import ContentHeader from "@/components/ContentHeader";

const Services = () => {
  return (
    <MaxWidthWrapperContainer>
      <div className="flex justify-center">
        <ContentHeader
          title="Services"
          subtitle="Our Range of Accounting Services"
          description=" Maxim Liberty provides specialized bookkeeping services tailored for small, medium, and large businesses to maintain accurate financial records."
          containerStyle="mt-[2.5rem] max-w-2xl"
        />
      </div>
      <ServiceCard/>
    </MaxWidthWrapperContainer>
  )
}
export default Services
