/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `promotions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "promotions_product_id_key" ON "promotions"("product_id");
