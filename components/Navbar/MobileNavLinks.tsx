import React from 'react'
import {navbar} from "@/constant/data";
import Link from "next/link";

type Props = {
  setIsOpen: (e:boolean) => void;
}

const MobileNavLinks = (props:Props) => {
  return (
    <div className="flex flex-col bg-white z-40">
      {navbar.map((item, index) => (
        <Link
          href={item.href}
          className="text-black p-4 pl-6"
          onClick={() => props.setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
export default MobileNavLinks
