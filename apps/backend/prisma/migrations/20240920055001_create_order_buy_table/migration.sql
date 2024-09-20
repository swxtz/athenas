-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('creditCard', 'debitCard', 'cash', 'pix', 'boleto');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'paid', 'canceled');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "orderBuyId" TEXT;

-- CreateTable
CREATE TABLE "order_buy" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_buy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_orderBuyId_fkey" FOREIGN KEY ("orderBuyId") REFERENCES "order_buy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_buy" ADD CONSTRAINT "order_buy_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
