/*
  Warnings:

  - You are about to drop the `FreightCompanies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductDimensions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShoppingCartProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAddress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDimensions" DROP CONSTRAINT "ProductDimensions_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCartProduct" DROP CONSTRAINT "ShoppingCartProduct_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCartProduct" DROP CONSTRAINT "ShoppingCartProduct_shopping_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAddress" DROP CONSTRAINT "UserAddress_user_id_fkey";

-- DropTable
DROP TABLE "FreightCompanies";

-- DropTable
DROP TABLE "ProductDimensions";

-- DropTable
DROP TABLE "ShoppingCartProduct";

-- DropTable
DROP TABLE "UserAddress";

-- CreateTable
CREATE TABLE "user_adress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "apartment" BOOLEAN NOT NULL,
    "ap_block" TEXT NOT NULL,

    CONSTRAINT "user_adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_dimensions" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "product_dimensions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freight_companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "km_price" INTEGER NOT NULL,
    "company_picture_url" TEXT NOT NULL,

    CONSTRAINT "freight_companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_cart_product" (
    "id" TEXT NOT NULL,
    "shopping_cart_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shopping_cart_product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_dimensions_product_id_key" ON "product_dimensions"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "freight_companies_name_key" ON "freight_companies"("name");

-- AddForeignKey
ALTER TABLE "user_adress" ADD CONSTRAINT "user_adress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_dimensions" ADD CONSTRAINT "product_dimensions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_cart_product" ADD CONSTRAINT "shopping_cart_product_shopping_cart_id_fkey" FOREIGN KEY ("shopping_cart_id") REFERENCES "shopping_cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_cart_product" ADD CONSTRAINT "shopping_cart_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
