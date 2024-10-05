/*
  Warnings:

  - A unique constraint covering the columns `[buy_order_id]` on the table `payment_notifications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentNotificationId` to the `buy_orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buy_order_id` to the `payment_notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buy_orders" ADD COLUMN     "paymentNotificationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "payment_notifications" ADD COLUMN     "buy_order_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "payment_notifications_buy_order_id_key" ON "payment_notifications"("buy_order_id");

-- AddForeignKey
ALTER TABLE "payment_notifications" ADD CONSTRAINT "payment_notifications_buy_order_id_fkey" FOREIGN KEY ("buy_order_id") REFERENCES "buy_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
