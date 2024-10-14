import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useState} from "react";
import {useInView} from "react-intersection-observer";
import {downToUpwardVariants} from "@/constant/variants";

export const HoverEffect = ({
                              items,
                              className,
                            }: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const { ref, inView } = useInView({
          threshold: 0.1,
        });

        return (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          ref={ref}
        >
          <motion.div
            variants={downToUpwardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
          <Card isHovered={hoveredIndex === idx}>
            <CardTitle isHovered={hoveredIndex === idx}>{item.title}</CardTitle>
            <hr className={cn("mt-2", hoveredIndex === idx ? "bg-white" : "bg-black")}/>
            <CardDescription isHovered={hoveredIndex === idx}>{item.description}</CardDescription>
          </Card>
          </motion.div>
        </Link>
      )}
      )}
    </div>
  );
};

export const Card = ({
                       className,
                       children,
                       isHovered,
                     }: {
  className?: string;
  children: React.ReactNode;
  isHovered: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border-[1px] border-black-600 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      animate={{
        backgroundColor: isHovered ? "rgb(61 58 58)" : "rgb(255, 255, 255)",
        boxShadow: isHovered
          ? "0px 10px 30px rgba(0, 0, 0, 0.3)"
          : "0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{duration: 0.15}}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};

export const CardTitle = ({
                            className,
                            children,
                            isHovered
                          }: {
  className?: string;
  children: React.ReactNode;
  isHovered: boolean;
}) => {
  return (
    <motion.h4
      className={cn("font-bold tracking-wide", className)}
      animate={{
        color: isHovered ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      }}
      transition={{duration: 0.15}}
    >
      {children}
    </motion.h4>
  );
};

export const CardDescription = ({
                                  className,
                                  children,
                                  isHovered,
                                }: {
  className?: string;
  children: React.ReactNode;
  isHovered: boolean;
}) => {
  return (
    <motion.p
      className={cn(
        "mt-8 tracking-wide leading-relaxed text-sm",
        className
      )}
      animate={{
        color: isHovered ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
      }}
      transition={{duration: 0.15}}
    >
      {children}
    </motion.p>
  );
};