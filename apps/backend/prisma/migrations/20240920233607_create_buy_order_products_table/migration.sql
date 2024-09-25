/*
  Warnings:

  - You are about to drop the column `orderBuyId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_orderBuyId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "orderBuyId";

-- CreateTable
CREATE TABLE "buy_order_products" (
    "id" TEXT NOT NULL,
    "buy_order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buy_order_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "buy_order_products" ADD CONSTRAINT "buy_order_products_buy_order_id_fkey" FOREIGN KEY ("buy_order_id") REFERENCES "buy_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buy_order_products" ADD CONSTRAINT "buy_order_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
