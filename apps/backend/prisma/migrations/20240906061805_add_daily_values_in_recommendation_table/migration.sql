/*
  Warnings:

  - You are about to drop the column `weekRecomendation` on the `recommendations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "recommendations" DROP COLUMN "weekRecomendation",
ADD COLUMN     "daily_likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "daily_recomendation" DOUBLE PRECISION NOT NULL DEFAULT 500,
ADD COLUMN     "daily_sales" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "daily_views" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "week_recomendation" DOUBLE PRECISION NOT NULL DEFAULT 500;
