-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "watching" TEXT[],
    "watched" TEXT[],
    "planning" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
