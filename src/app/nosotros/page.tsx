import { Metadata } from "next"

import Image from "next/image"

export const metadata: Metadata = {
  title: "Nosotros - IE 1263 PURUCHUCO",
  description: "Nosotros - IE 1263 PURUCHUCO"
}

export default function NosotrosPage() {
  return (
    <div className="w-full max-w-7xl m-auto px-4 md:px-6 py-6">
      <div className="w-full max-w-4xl m-auto flex flex-col gap-3">
        <h2 className="text-center font-bold text-4xl">Sobre nosotros</h2>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. </p>
      </div>
      <div className="mt-8 w-full max-w-4xl m-auto grid md:grid-cols-2 gap-9">
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[332px]">
            <Image className="object-cover object-center" src="/assets/mision.png" alt="Misión" fill></Image>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-center leading-7">Misión</p>
            <p className="text-center font-normal text-sm leading-5">“Somos una institución educativa que brinda una educación intercultural e inclusiva que tiene como base los valores humanos; con docentes proactivos, empáticos e innovadores, en uso de los recursos tecnológicos que desarrollan procesos pedagógicos en todas las áreas para lograr la mejora de los aprendizajes de nuestros estudiantes”.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[332px]">
            <Image className="object-cover object-center" src="/assets/vision.png" alt="Visión" fill></Image>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-center leading-7">Visión</p>
            <p className="text-center font-normal text-sm leading-5">“En el 2024, seremos el referente educativo intercultural e inclusivo del distrito de Ate que promueve la defensa del patrimonio cultural, la identidad local, nacional y la mejora de los aprendizajes con la participación de la comunidad educativa para alcanzar los estándares de calidad, desarrollando competencias que formen estudiantes con Identidad, conciencia, habilidades tecnológicas, responsabilidad ambiental, honestidad y respeto, hacia el logro de la excelencia educativa”.</p>
          </div>
        </div>
      </div>
    </div>
  )
}