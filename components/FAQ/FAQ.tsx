"use client";

import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import QuestionCard from "@/components/FAQ/QuestionCard";
import {useInView} from "react-intersection-observer";
import {downToUpwardVariants} from "@/constant/variants";
import {motion} from "framer-motion";
import ContentHeader from "@/components/ContentHeader";

const FAQ = () => {
  const {ref, inView} = useInView({
    threshold: 0.1,
  });

  return (
    <MaxWidthWrapperContainer className="my-16">
      <div className="flex justify-between flex-col md:flex-row">
        <ContentHeader
          title="FAQ"
          subtitle="Our common Question"
          description="Check out frequently asked questions to have answers you are looking for."
          containerStyle="text-left mb-5 max-w-full lg:max-w-md md:max-w-64 pb-10 flex flex-col justify-center pr-5"
        />
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
