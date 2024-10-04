/* eslint-disable react/prop-types */
"use client";

import { Carousel } from "flowbite-react";

export function DetailCarousel({ product }) {
  return (
    <div className="h-72">
      <Carousel pauseOnHover>
        {product.images.map((image, index) => (
          <img className="h-full w-full object-cover" key={index} src={image} alt={`Product image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}
