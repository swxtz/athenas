/*
  Warnings:

  - Added the required column `total_price` to the `buy_orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buy_orders" ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL;
