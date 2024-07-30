import prisma from "@libs/db";

import { NextResponse } from "next/server";

// Convertir la fecha a formato deseado
const convertirFecha = (fecha: string) => {
  const [anio, mes, dia] = fecha.split("-");
  return `${dia}/${mes}/${anio}`;
};

export async function GET() {
  const calendar = await prisma.calendar.findMany();
  return NextResponse.json(calendar);
}

export async function POST(req: any,res: any) {
  const data: any = await req.json()

  await prisma.calendar.update({
    where: {
      id: data?.id
    },
    data: {
      day: convertirFecha(data?.day),
      description: data?.description,
      title: data?.title,
      image: data?.image
    }
  })

  return NextResponse.json("hola");
}