"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {downToUpwardVariants} from "@/constant/variants";

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
        <div className="max-w-3xl flex flex-col gap-2 pr-5">
          <div className="font-medium text-3xl decoration-2 italic mb-2">Why to Choose us?</div>
          <div className="text-paragraph text-3xl">100% Virtual with Services Delivered Online or Using Remote Desktop!</div>
          <div className="text-paragraph text-base tracking-wider">
            We help small business owners save time and money (up to 90%) by delivering the best accounting services at the lowest possible rates so you can focus on growing your business.
          </div>
        </div>
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
