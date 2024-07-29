import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#0E0E0E]">
      <footer className="w-full max-w-96 m-auto py-11 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-56 flex gap-2 justify-center items-center">
            <Image width={48} height={48} src="/assets/logo.png" alt="Logo"></Image>
            <p className="font-bold text-base leading-5 text-white">IE 10589 Puruchuco</p>
          </div>
          <button className="w-56 border-white border-[1px] py-3 rounded-md text-white font-normal text-sm leading-4" type="button">Contactemos</button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-white text-center text-sm font-normal">Jr. Martinez de Mendoza 543 Ate, lima, lima</p>
            <p className="text-white text-center text-sm font-normal">Celular 876 543 245</p>
          </div>
          <div className="flex gap-3 text-white justify-center">
            <a rel="noopener" href="https://www.facebook.com/ie1263" target="_blank">
              <FaFacebook size={20} />
            </a>
            <a rel="noopener" href="https://www.instagram.com/" target="_blank">
              <BiLogoInstagramAlt size={20} />
            </a>
            <a rel="noopener" href="https://www.youtube.com/" target="_blank">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>  
  )
}