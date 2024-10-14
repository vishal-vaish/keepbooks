import React from 'react'
import {cn} from "@/lib/utils";

type Props = {
  children: React.ReactNode
  className?: string;
}

const MaxWidthWrapperContainer = (props:Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", props.className)}>
      {props.children}
    </div>
  )
}
export default MaxWidthWrapperContainer
