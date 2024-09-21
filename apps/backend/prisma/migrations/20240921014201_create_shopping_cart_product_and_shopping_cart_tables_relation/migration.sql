/*
  Warnings:

  - Added the required column `shopping_cart_id` to the `ShoppingCartProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingCartProduct" ADD COLUMN     "shopping_cart_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ShoppingCartProduct" ADD CONSTRAINT "ShoppingCartProduct_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "shopping_cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
