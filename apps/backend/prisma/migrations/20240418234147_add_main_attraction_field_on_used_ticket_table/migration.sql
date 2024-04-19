/*
  Warnings:

  - Added the required column `main_attraction` to the `used_tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "used_tickets" ADD COLUMN     "main_attraction" TEXT NOT NULL;
