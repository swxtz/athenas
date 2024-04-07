/*
  Warnings:

  - Changed the column `userType` on the `users` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userType" SET DEFAULT ARRAY['User']::"UserType"[],
ALTER COLUMN "userType" SET DATA TYPE "UserType"[];
