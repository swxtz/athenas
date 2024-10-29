/*
  Warnings:

  - Changed the type of `apartment` on the `UserAdress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserAdress" DROP COLUMN "apartment",
ADD COLUMN     "apartment" BOOLEAN NOT NULL;
