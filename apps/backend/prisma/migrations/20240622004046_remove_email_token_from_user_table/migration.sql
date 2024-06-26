/*
  Warnings:

  - You are about to drop the column `email_verification_token` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_verification_token";
