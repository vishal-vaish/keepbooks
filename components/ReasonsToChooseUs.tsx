"use client";

import React from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import {Button} from "@/components/ui/button";
import {startUpPreferTableData} from "@/constant/data";
import graphImage from "@/public/startup-bargraph.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {downToUpwardVariants} from "@/constant/variants";
import { ArrowRight } from 'lucide-react';

const ReasonsToChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="bg-primary w-full py-10 mb-[10%]">
      <MaxWidthWrapperContainer className="relative">
        <motion.div
          ref={ref}
          variants={downToUpwardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex justify-between font-roboto">
            <div className="max-w-2xl flex flex-col gap-2 pr-5 text-white">
              <div className="font-medium text-3xl decoration-2 mb-2 tracking-wide">Why Startups Prefer Us</div>
              <div className="text-sm tracking-wide">Simple: Our track record & talent. We are your long-term finance
                team, and the
                US-based Fractional CFO & analysts we allocate to you will only be working with a handful of clients at
                a time, so they can be high-touch, embedded in your business, and feel like an in-house team. Below are
                the key reasons why startups prefer us.
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                variant="secondary"
                className="px-5 py-3"
                icon={<ArrowRight/>}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 w-full md:w-[50%] lg:w-[60%] mt-5">
            {startUpPreferTableData.map((item) => (
              <div className="text-white font-roboto" key={item.id}>
                <div>
                  <span className="font-bold text-2xl pr-1">{item.id}</span>
                  <span className="text-base">{item.title}</span>
                </div>
                <div className="text-sm tracking-normal antialiased leading-1">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="absolute right-[5%] bottom-[-40%] w-full max-w-[400px] hidden md:block md:right-0">
          <Image
            src={graphImage}
            alt="graph-Image"
            width={400}
            height={400}
            className="w-full h-auto md:w-[350px] lg:w-[350px] lg:h-[300px]"
          />
        </div>
      </MaxWidthWrapperContainer>
    </div>
  )
}
export default ReasonsToChooseUs;
