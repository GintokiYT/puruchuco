-- CreateTable
CREATE TABLE "Calendar" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);
