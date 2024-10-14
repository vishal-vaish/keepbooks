"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {downToUpwardVariants} from "@/constant/variants";
import ContentHeader from "@/components/ContentHeader";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <MaxWidthWrapperContainer>
      <motion.div
        ref={ref}
        className="flex justify-between my-12 font-roboto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={downToUpwardVariants}
      >
        <ContentHeader
          title="Why to Choose us?"
          subtitle="100% Virtual with Services Delivered Online or Using Remote Desktop!"
          description="We help small business owners save time and money (up to 90%) by delivering the best accounting services at the lowest possible rates so you can focus on growing your business."
          containerStyle="text-left max-w-md md:max-w-2xl"
        />
        <div className="flex justify-center items-center">
          <Button variant="secondary" className="px-5 py-3">
            Why Choose us?
          </Button>
        </div>
      </motion.div>
    </MaxWidthWrapperContainer>
  )
}

export default WhyChooseUs;
