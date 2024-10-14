import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";

const Testimonial = () => {
  return (
    <MaxWidthWrapperContainer>
      <div className="mb-10">
        <div className="max-w-3xl flex flex-col gap-2 pr-5 font-roboto pb-10">
          <div className="font-semibold text-xl decoration-2 mb-2">Testimonials</div>
          <div className="text-paragraph text-3xl tracking-wide">Trusted by 1000s of Small Business Owners</div>
          <div className="text-primary text-sm tracking-wider">
            Check out 5 star reviews of our satisfied clients about how Maxim Liberty's bookkeeping services have
            streamlined their financial management.
          </div>
        </div>
        <TestimonialSlider/>
      </div>
    </MaxWidthWrapperContainer>
  )
}
export default Testimonial
