import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria - IE 1263 PURUCHUCO",
  description: "Galeria - IE 1263 PURUCHUCO"
}

// const images = [
//   {
//     src: "/assets/galery/image01.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "/assets/galery/image02.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "/assets/galery/image03.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   },
//   {
//     src: "/assets/galery/image04.jpg",
//     width: 320,
//     height: 212,
//     tags: [
//       { value: "Ocean", title: "Ocean" },
//       { value: "People", title: "People" },
//     ],
//     alt: "Boats (Jeshu John - designerspics.com)",
//   }
// ];

export default function GaleriaPage() {
  return (
    <>
      <div className="w-full max-w-lg m-auto px-4 md:px-6 py-6">
        <h2 className="text-center font-bold text-4xl leading-9">Galería</h2>
        <p className="text-center mt-3 font-normal text-sm leading-4">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet. </p>
      </div>
      <div className="w-full max-w-7xl m-auto px-4 md:px-6 mb-12 columns-2 md:columns-3 lg:columns-4">
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image01.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image02.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image03.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image04.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image05.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image06.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image07.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image08.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image09.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image10.jpg" alt="" />
        <img className="h-auto max-w-full rounded-lg mb-4" src="/assets/galery/image11.jpg" alt="" />
      </div>
    </>
  )
}