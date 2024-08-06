/*
  Warnings:

  - You are about to drop the `recomendations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recomendations";

-- CreateTable
CREATE TABLE "recommendations" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 500,
    "weekRecomendation" DOUBLE PRECISION NOT NULL DEFAULT 500,
    "views" INTEGER NOT NULL DEFAULT 0,
    "week_views" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "week_likes" INTEGER NOT NULL DEFAULT 0,
    "sales" INTEGER NOT NULL DEFAULT 0,
    "week_sales" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);
