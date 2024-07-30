"use client";

import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import Image from "next/image";
import { getDay } from "@/utils";

type Props = {
  slides: any[]
}

export default function CarouselComponent({ slides }: Props) {

  useEffect(() => {
    // const button = document.querySelector('button[data-testid="carousel-right-control"]')! as HTMLButtonElement;
    // console.log(button);
    // setInterval(() => {
    //   button.click();
    // }, 1000);
  }, []); 

  return (
    <div className="h-[390px]">
      <Carousel slide={false}>
        { slides.map((slide: any) => (
          <div className="w-full m-auto pt-6 pb-12" key={slide.id}>
            <div className="w-full max-w-80 m-auto flex flex-col overflow-hidden rounded-md">
              <div className="w-full h-[170px] relative">
                <Image src={slide.image} alt="image" fill></Image>
              </div>
              <div className="flex flex-col h-[140px] p-4 overflow-hidden gap-1 bg-white">
                <p className="font-normal text-base leading-5">{ getDay(slide.day) }</p>
                <p className="font-normal text-base leading-5">{ slide.title }</p>
                <p className="font-normal text-base leading-5 text-ellipsis overflow-hidden line-clamp-3">{ slide.description }</p>
              </div>
            </div>
          </div>
        )) }
      </Carousel>
    </div>
  );
}