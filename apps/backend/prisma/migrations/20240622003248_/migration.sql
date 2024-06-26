/*
  Warnings:

  - You are about to drop the column `email_verified_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_verified_at",
ADD COLUMN     "email_verificated_at" TIMESTAMP(3);
