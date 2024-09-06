/*
  Warnings:

  - You are about to drop the column `week_likes` on the `recommendations` table. All the data in the column will be lost.
  - You are about to drop the column `week_recomendation` on the `recommendations` table. All the data in the column will be lost.
  - You are about to drop the column `week_sales` on the `recommendations` table. All the data in the column will be lost.
  - You are about to drop the column `week_views` on the `recommendations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "recommendations" DROP COLUMN "week_likes",
DROP COLUMN "week_recomendation",
DROP COLUMN "week_sales",
DROP COLUMN "week_views",
ADD COLUMN     "weekly_likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "weekly_recomendation" DOUBLE PRECISION NOT NULL DEFAULT 500,
ADD COLUMN     "weekly_sales" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "weekly_views" INTEGER NOT NULL DEFAULT 0;
