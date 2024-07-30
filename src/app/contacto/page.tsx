import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - IE 1263 PURUCHUCO",
  description: "Contacto - IE 1263 PURUCHUCO"
}

export default function ContactoPage() {
  return (
    <div className="w-full max-w-7xl m-auto px-4 md:px-6 py-6">
      <div className="w-full max-w-4xl m-auto flex flex-col gap-3">
        <h2 className="text-center font-bold text-4xl">Contacto</h2>
        <div className="flex flex-col gap-4 items-center text-sm font-normal leading-4 md:flex-row md:justify-center max-w-xl m-auto md:gap-0 mt-6">
          <p className="flex-1 px-6">Jr los sauces 543- lima-lima-lima</p>
          <div className="flex-1 md:border-x md:border-black px-6">
            <p>Telef. 876 543 245</p>
            <p>Telef. 876 543 245</p>
          </div>
          <div className="flex-1 px-6">
            <p>Lunes a viernes</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
        </div>
        <div className="w-full max-w-4xl h-[480px] m-auto mt-12">
          <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9295556040333!2d-76.93451933562756!3d-12.048367866744337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6baa172e3a1%3A0xd281f890fcf4fcbb!2sIE%201263%20Puruchuco!5e0!3m2!1ses-419!2spe!4v1722299420622!5m2!1ses-419!2spe" 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </div>
  )
}