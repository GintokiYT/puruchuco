import prisma from "@libs/db";

import { NextResponse } from "next/server";

export async function GET() {
  const calendar = await prisma.calendar.findMany();
  return NextResponse.json(calendar);
}