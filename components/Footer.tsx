import React from 'react';
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import Image from "next/image";
import logoImage from "@/public/logo.png";
import {footerCompanyService, footerCoreService} from "@/constant/data";

const Footer = () => {
  return (
    <div className="bg-primary py-8 text-white">
      <MaxWidthWrapperContainer>
        <div className="grid grid-cols-1 w-full md:grid-cols-[2fr_1fr_1fr] gap-6">
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <Image src={logoImage} alt="logo image" width={200} height={150} className="ml-[-1.4rem] m-1"/>
            <p className="md:max-w-sm leading-tight text-sm tracking-wide max-w-full">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour.
            </p>
            <div className="my-3 flex gap-2">
              <div className="w-5 h-5 rounded-full bg-white"/>
              <div className="w-5 h-5 rounded-full bg-white"/>
              <div className="w-5 h-5 rounded-full bg-white"/>
            </div>
          </div>

          <div className="font-roboto mt-5 md:mt-0">
            <div className="pb-2 pl-1 md:pl-0">Core Services</div>
            {footerCoreService.map((item, index) => (
              <div key={index} className="text-sm pb-1 pl-5 md:pl-0">
                {item}
              </div>
            ))}
          </div>

          <div className="font-roboto mt-5 md:mt-0">
            <div className="pb-2 pl-1 md:pl-0">Company</div>
            <div className="flex gap-1 flex-col">
              {footerCompanyService.map((item, index) => (
                <div key={index} className="text-sm pb-1 flex items-center gap-3 pl-5 md:pl-0">
                  <div className="w-5 h-5 rounded-full border border-white"/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between text-gray-300 mt-6 text-sm">
          <div>Copyright &copy; KeepBooks, 2024</div>
          <div className="hover:text-white cursor-pointer">Privacy Policy</div>
        </div>
      </MaxWidthWrapperContainer>
    </div>
  );
}

export default Footer;
