/*
  Warnings:

  - The `status` column on the `payment_notifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PaymentNotificationStatus" AS ENUM ('Done', 'Failed', 'Pending', 'Refunded', 'Processing');

-- AlterTable
ALTER TABLE "payment_notifications" DROP COLUMN "status",
ADD COLUMN     "status" "PaymentNotificationStatus" NOT NULL DEFAULT 'Pending';
