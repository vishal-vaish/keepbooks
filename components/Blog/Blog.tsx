"use client";

import React, {useEffect} from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import BlogSlider from "@/components/Blog/BlogSlider";

const Blog = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-black-bg py-[3rem] mt-[5rem]">
      <MaxWidthWrapperContainer>
        <div>
          <div className="flex justify-between items-center">
            <div className="max-w-3xl flex flex-col gap-2 pr-5 font-roboto pb-10">
              <div className="font-semibold text-xl decoration-2 mb-2">Latest articles</div>
              <div className="text-paragraph text-3xl tracking-wide font-medium">Read Our Latest Blog Posts</div>
              <div className="text-primary text-sm tracking-wider">
                Stay informed with our blog, featuring practical tips and insights on bookkeeping and financial
                management.
              </div>
            </div>
            <div>
              <Button
                variant="secondary"
                className="px-5 py-3"
                icon={<ArrowRight/>}
              >
                View Article
              </Button>
            </div>
          </div>
          <BlogSlider/>
        </div>
      </MaxWidthWrapperContainer>
    </div>
  )
}
export default Blog
