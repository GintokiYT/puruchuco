import { FaGraduationCap } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

export default function SectionIdeal() {
  return (
    <div className="w-full m-auto bg-white">
      <div className="w-full max-w-4xl m-auto flex flex-wrap gap-8 py-12">
      
      <div className="w-64 m-auto flex flex-col gap-1 items-center">
        <FaGraduationCap size={32}/>
        <p className="font-medium text-2xl leading-7">Educación</p>
        <p className="text-center font-normal text-sm leading-4">Tenemos el compromiso de brindarles una educación de calidad.</p>
      </div>

      <div className="w-64 m-auto flex flex-col gap-1 items-center text-p-color-4">
        <IoMdFootball size={32}/>
        <p className="font-medium text-2xl leading-7">Deporte</p>
        <p className="text-center font-normal text-sm leading-4">Interactuan con sus pares para un mejor desenvolvimiento en sus actividades diarias.</p>
      </div>

      <div className="w-64 m-auto flex flex-col gap-1 items-center text-p-color-3">
        <FaBookReader size={32}/>
        <p className="font-medium text-2xl leading-7">Lectura</p>
        <p className="text-center font-normal text-sm leading-4">Disfrutan las horas de participación de maratones de lectura en sus horas de clases.</p>
      </div>
      
    </div>
    </div>
  )
}