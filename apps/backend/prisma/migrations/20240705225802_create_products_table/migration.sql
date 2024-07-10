-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('bread', 'hamburger', 'other');

-- CreateEnum
CREATE TYPE "ProductState" AS ENUM ('available', 'unavailable', 'outOfStock');

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "buy_price" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "sku" TEXT,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "rating" DOUBLE PRECISION,
    "is_promotion" BOOLEAN NOT NULL DEFAULT false,
    "promotion_price" INTEGER,
    "promotion_start" TIMESTAMP(3),
    "promotion_end" TIMESTAMP(3),
    "last_promotion" TIMESTAMP(3),
    "promotion_created_at" TIMESTAMP(3),
    "promotion_creator_id" TEXT,
    "promotionOwner" TEXT,
    "type" "ProductType" NOT NULL DEFAULT 'other',
    "state" "ProductState" NOT NULL DEFAULT 'available',
    "local_pickup" BOOLEAN NOT NULL DEFAULT true,
    "number_of_sales" INTEGER NOT NULL DEFAULT 0,
    "number_of_views" INTEGER NOT NULL DEFAULT 0,
    "number_of_views_in_last_week" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
