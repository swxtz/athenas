/*
  Warnings:

  - Added the required column `amount` to the `ShoppingCartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingCartProduct" ADD COLUMN     "amount" INTEGER NOT NULL;
