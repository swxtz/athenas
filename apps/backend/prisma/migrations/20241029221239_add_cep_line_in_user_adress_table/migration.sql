/*
  Warnings:

  - Added the required column `cep` to the `UserAdress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAdress" ADD COLUMN     "cep" INTEGER NOT NULL;
