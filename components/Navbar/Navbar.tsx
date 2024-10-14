"use client";

import React, {useEffect, useState} from "react"
import logo from "@/public/logo.png";
import logoDark from "@/public/logo-dark.png";
import Image from "next/image";
import MaxWidthWrapperContainer from "@/components/MaxWidthWrapperContainer";
import {navbar} from "@/constant/data";
import Link from "next/link";
import MenuButton from "@/components/Navbar/MenuButton";
import MobileNavLinks from "@/components/Navbar/MobileNavLinks";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isNotHomePage = pathname !== "/";

  const bgColorClass = isScrolled || open || isNotHomePage
    ? "bg-white border-b-2"
    : "bg-transparent";

  const textColorClass = isScrolled || isNotHomePage
    ? "text-primary"
    : "text-white";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        bgColorClass
      }`}
    >
      <MaxWidthWrapperContainer className={`${open ? "border-b-2" : ""}`}>
        <div className={`flex justify-between items-center h-16 py-2`}>
          <Link href={"/"}>
            <Image
              src={isScrolled || open || isNotHomePage ? logoDark : logo}
              alt="logo"
              className="w-[160px] h-[40px] transition-all duration-300"
            />
          </Link>
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-300 ${
              textColorClass
            }`}>
            {navbar.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-5 font-roboto"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="block lg:hidden relative">
            <MenuButton isOpen={open} setIsOpen={setOpen} isScrolled={isScrolled || isNotHomePage}/>
          </div>
          {open && (
            <div className="absolute left-0 right-0 bottom-0 top-full block lg:hidden z-40">
              <MobileNavLinks setIsOpen={() => setOpen(false)}/>
            </div>
          )}
        </div>
      </MaxWidthWrapperContainer>
    </div>
  )
}

export default Navbar;
