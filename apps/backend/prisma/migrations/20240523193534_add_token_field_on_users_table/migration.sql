/*
  Warnings:

  - Added the required column `email_verified_token` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "email_verified_token" TEXT NOT NULL;
