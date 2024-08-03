/*
  Warnings:

  - You are about to drop the column `is_promotion` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `last_promotion` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotionOwner` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_created_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_creator_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_end` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `promotion_start` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "is_promotion",
DROP COLUMN "last_promotion",
DROP COLUMN "promotionOwner",
DROP COLUMN "promotion_created_at",
DROP COLUMN "promotion_creator_id",
DROP COLUMN "promotion_end",
DROP COLUMN "promotion_price",
DROP COLUMN "promotion_start";

-- CreateTable
CREATE TABLE "promotions" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "is_promotion" BOOLEAN NOT NULL DEFAULT false,
    "promotion_price" INTEGER,
    "promotion_start" TIMESTAMP(3),
    "promotion_end" TIMESTAMP(3),
    "last_promotion" TIMESTAMP(3),
    "promotion_created_at" TIMESTAMP(3),
    "promotion_creator_id" TEXT,
    "promotionOwner" TEXT,

    CONSTRAINT "promotions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
