-- CreateEnum
CREATE TYPE "CategoryEnum" AS ENUM ('bread', 'hamburger', 'others');

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "categories" "CategoryEnum" NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
