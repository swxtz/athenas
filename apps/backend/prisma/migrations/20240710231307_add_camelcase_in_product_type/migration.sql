/*
  Warnings:

  - You are about to drop the column `type` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "type",
ADD COLUMN     "product_type" "ProductType" NOT NULL DEFAULT 'others';
