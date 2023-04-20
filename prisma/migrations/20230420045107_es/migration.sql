/*
  Warnings:

  - The `watching` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `watched` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `planning` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "watching",
ADD COLUMN     "watching" INTEGER[],
DROP COLUMN "watched",
ADD COLUMN     "watched" INTEGER[],
DROP COLUMN "planning",
ADD COLUMN     "planning" INTEGER[];
