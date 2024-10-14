import React from 'react'
import Image from "next/image";
import bannerImage from "@/public/Banner image.png"
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import {Button} from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src={bannerImage}
        alt="banner image"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 text-white">
        <MaxWidthWrapperContainer className="h-[100vh] flex justify-center flex-col">
          <div className="max-w-[50%] font-roboto">
            <div className="text-[4rem] leading-tight mb-2">
              Bookkeeping Services
            </div>
            <div className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </div>
            <Button
              className="mt-5"
            >
              Call Now
            </Button>
          </div>
        </MaxWidthWrapperContainer>
      </div>
    </div>
  )
}
export default Hero
