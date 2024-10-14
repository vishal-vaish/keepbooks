import React from 'react'
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
  settings: any;
}

const CustomSlider = (props:Props) => {
  return (
    <Slider {...props.settings}>
      {props.children}
    </Slider>
  )
}
export default CustomSlider
