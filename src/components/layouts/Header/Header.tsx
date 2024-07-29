"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Header() {

  const pathname = usePathname()
  const [ stateMenu, setStateMenu ] = useState(false);

  const handleOpenMenu = () => setStateMenu(true);
  const handleCloseMenu = () => setStateMenu(false);

  // console.log(pathname);

  return (
    <header className={`w-full h-24 sticky top-0 left-0 z-50 bg-p-color-3`}>
      <div className="w-full h-full max-w-7xl m-auto">
        <div className="w-full h-full px-4 flex items-center justify-between">
          <Link 
            className="h-full flex items-center gap-2"
            href="/"
            onClick={handleCloseMenu}
          >
            <div className="relative w-12 h-12">
              <Image src="/assets/logo.png" alt="logo" fill></Image>
            </div>
            <h2 className="font-bold text-base text-white">IE 10589 Puruchuco</h2>
          </Link>
          <div className="md:hidden relative text-white cursor-pointer">
            { stateMenu === false
              ? <RxHamburgerMenu size={24} onClick={handleOpenMenu}/> 
              : <IoMdClose size={24} onClick={handleCloseMenu}/>
            }
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-6 font-medium text-base">
              <li className="text-white">
                Niveles
                <div></div>
              </li>
              <li className="text-white">
                <Link href="/galeria">Galería</Link>
              </li>
              <li className="text-white">
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li className="text-white">
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      { stateMenu && (
        <div className="md:hidden absolute w-full h-[calc(100vh-96px)] bg-white">
          <ul className="flex flex-col px-4 pt-4 font-medium text-base">
            <li className="py-4 border-b-[1px] border-solid border-p-gray-300">
              Niveles
              <div className="flex flex-col gap-4 font-normal text-sm pt-4">
                <Link href="/niveles/primaria" onClick={handleCloseMenu}>Primaria</Link>
                <Link href="/niveles/secundaria" onClick={handleCloseMenu}>Secundaria</Link>
              </div>
            </li>
            <li className="py-4 border-b-[1px] border-solid border-p-gray-300">
              <Link href="/galeria" onClick={handleCloseMenu}>Galería</Link>
            </li>
            <li className="py-4 border-b-[1px] border-solid border-p-gray-300">
              <Link href="/nosotros" onClick={handleCloseMenu}>Nosotros</Link>
            </li>
            <li className="py-4 border-b-[1px] border-solid border-p-gray-300">
              <Link href="/contacto" onClick={handleCloseMenu}>Contacto</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}