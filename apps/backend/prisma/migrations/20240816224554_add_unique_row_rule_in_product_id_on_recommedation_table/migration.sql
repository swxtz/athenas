/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `recommendations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "recommendations_product_id_key" ON "recommendations"("product_id");
