import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import ClientSlider from "@/components/Client/ClientSlider";

const Client = () => {
  return (
    <div className="py-10 bg-black-bg">
      <MaxWidthWrapperContainer>
        <h2 className="text-center text-2xl font-bold mb-6">Our Clients</h2>
        <ClientSlider/>
      </MaxWidthWrapperContainer>
    </div>
  )
}
export default Client
