import Carousel from "@/components/views/Home/Carousel";
import SectionIdeal from "@/components/views/Home/SectionIdeal";
import SectionPromote from "@/components/views/Home/SectionPromote";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inicio - IE 1263 PURUCHUCO",
  description: "Inicio - IE 1263 PURUCHUCO",
};

export async function getData() {
  const res = await fetch('http://localhost:3000/api/calendar');
  return res.json()
}

export default async function HomePage() {

  const slides = await getData();

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[calc(100vh-96px)] relative">
          <Image className="object-cover object-center" src="/assets/fondo.png" alt="Fondo" fill></Image>
        </div>
      </div>
      <div className="w-full max-w-7xl m-auto px-4 md:px-6 my-12">
        <h2 className="text-2xl text-center font-bold">Calendario de actividades</h2>
        <div className="w-full max-w-3xl m-auto">
          <Carousel slides={slides}/>
        </div>
      </div>
      <SectionIdeal />
      <SectionPromote />
    </>
  );
}
