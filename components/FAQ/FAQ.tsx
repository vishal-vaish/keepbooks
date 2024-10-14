"use client";

import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import QuestionCard from "@/components/FAQ/QuestionCard";
import {useInView} from "react-intersection-observer";
import {downToUpwardVariants} from "@/constant/variants";
import {motion} from "framer-motion";

const FAQ = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <MaxWidthWrapperContainer className="my-16">
      <div className="flex justify-between flex-col md:flex-row">
        <div className=" max-w-full lg:max-w-md md:max-w-64 flex flex-col gap-2 pr-5 font-roboto pb-10 justify-center">
          <div className="font-semibold text-xl tracking-wider mb-2">FAQ</div>
          <div className="text-paragraph text-3xl tracking-wide font-medium">Read Our Latest Blog Posts</div>
          <div className="text-primary text-sm tracking-wider">
            Check out frequently asked questions to have answers you are looking for.
          </div>
        </div>
        <motion.div
          ref={ref}
          className="w-auto pr-10 md:w-[50%]"
          variants={downToUpwardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <QuestionCard/>
        </motion.div>
      </div>
    </MaxWidthWrapperContainer>
  )
}

export default FAQ