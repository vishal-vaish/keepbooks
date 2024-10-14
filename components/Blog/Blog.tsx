"use client";

import React, {useEffect} from 'react'
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import BlogSlider from "@/components/Blog/BlogSlider";
import ContentHeader from "@/components/ContentHeader";

const Blog = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-black-bg py-[3rem] mt-[5rem]">
      <MaxWidthWrapperContainer>
        <div className="flex justify-between items-center">
          <ContentHeader
            title="Latest articles"
            subtitle="Read Our Latest Blog Posts"
            description="Stay informed with our blog, featuring practical tips and insights on bookkeeping and financial management."
            containerStyle="text-left max-w-screen-xl mb-5 mr-5"
          />
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
      </MaxWidthWrapperContainer>
    </div>
  )
}
export default Blog
