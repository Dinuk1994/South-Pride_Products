"use client";
import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'
import Image5 from '../../assets/Image5.jpg'
import Image6 from '../../assets/Image6.jpg'

import { Carousel } from "flowbite-react";

export function CarouselElement() {
  return (
    <div className="w-full h-[480px] mobile:h-64 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={Image1} alt="Slide 1" />
        <img src={Image2} alt="Slide 2" />
        <img src={Image3} alt="Slide 3" />
        <img src={Image4} alt="Slide 4" />
        <img src={Image5} alt="Slide 5" />
        <img src={Image6} alt="Slide 5" />
      </Carousel>
    </div>
  );
}
