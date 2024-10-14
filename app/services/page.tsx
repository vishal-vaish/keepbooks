import React from 'react'
import NavigationPath from "@/components/NavigationPath";

const ServiceBreadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
];

const Page = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3 text-center mt-[2.5rem] w-full font-roboto bg-black-bg pt-12 pb-8">
        <div className="font-semibold text-2xl text-primary">Services Example</div>
        <div className="text-gray text-base max-w-4xl mx-auto tracking-wider">
          Maxim Liberty provides specialized bookkeeping services tailored for small, medium, and large businesses to
          maintain accurate financial records.
        </div>
        <div className="flex justify-center">
          <NavigationPath items={ServiceBreadcrumbItems} />
        </div>
      </div>
    </div>
  )
}
export default Page
