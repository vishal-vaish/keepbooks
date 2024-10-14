import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import ContentHeader from "@/components/ContentHeader";

const Testimonial = () => {
  return (
    <MaxWidthWrapperContainer>
      <div className="mb-10">
        <ContentHeader
          title="Testimonials"
          subtitle="Trusted by 1000s of Small Business Owners"
          description="Check out 5 star reviews of our satisfied clients about how Maxim Liberty's bookkeeping services have streamlined their financial management."
          containerStyle="text-left mt-[10rem] xl:mt-[5rem] mb-5 max-w-screen-md"
        />
        <TestimonialSlider/>
      </div>
    </MaxWidthWrapperContainer>
  )
}
export default Testimonial
