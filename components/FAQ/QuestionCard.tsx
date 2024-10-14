"use client";

import React, {useState} from 'react'
import {ChevronDown, ChevronUp} from 'lucide-react';
import {questionCardData} from "@/constant/data";
import {AnimatePresence, motion} from "framer-motion";

const QuestionCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {questionCardData.map((question, index) => (
        <div
          className="w-full mb-3 transition-transform duration-300 hover:translate-x-10"
          key={index}
        >
          <div
            className="bg-primary flex text-white px-3 py-2 rounded-md justify-between items-center cursor-pointer shadow-md"
            onClick={() => toggleAnswer(index)}
          >
            <div>
              {question.question}
            </div>
            {openIndex === index ? <ChevronUp/> : <ChevronDown/>}
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.3}}
                className="bg-white text-black px-3 py-2 mt-2 rounded-md border-2 shadow-md overflow-hidden"
              >
                {question.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
export default QuestionCard
