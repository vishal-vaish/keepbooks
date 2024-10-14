import React from 'react'
import {cn} from "@/lib/utils";

type Props = {
  title: string;
  subtitle: string;
  description?: string;
  containerStyle?: string;
}

const ContentHeader = (props: Props) => {
  return (
    <div className={cn("flex flex-col gap-2 text-center font-roboto w-full", props.containerStyle)}>
      <div className="font-medium text-3xl">{props.title}</div>
      <div className="text-paragraph text-2xl font-medium">{props.subtitle}</div>
      {props.description && (
        <div className="text-gray text-base tracking-wide">{props.description}</div>
      )}
    </div>
  )
}
export default ContentHeader
