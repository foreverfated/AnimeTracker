/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "watching" TEXT[],
    "watched" TEXT[],
    "planning" TEXT[],

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
