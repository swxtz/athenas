/*
  Warnings:

  - You are about to drop the column `paymentNotificationId` on the `buy_orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[buy_order_id]` on the table `payment_notifications` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "buy_orders" DROP COLUMN "paymentNotificationId";

-- CreateIndex
CREATE UNIQUE INDEX "payment_notifications_buy_order_id_key" ON "payment_notifications"("buy_order_id");
