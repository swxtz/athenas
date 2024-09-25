/*
  Warnings:

  - You are about to drop the column `product_id` on the `shopping_cart` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `shopping_cart` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `shopping_cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shopping_cart" DROP CONSTRAINT "shopping_cart_product_id_fkey";

-- DropIndex
DROP INDEX "shopping_cart_product_id_key";

-- AlterTable
ALTER TABLE "shopping_cart" DROP COLUMN "product_id",
DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ShoppingCartProduct" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShoppingCartProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShoppingCartProduct" ADD CONSTRAINT "ShoppingCartProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
