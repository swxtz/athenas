-- AlterTable
ALTER TABLE "recommendations" ALTER COLUMN "views" SET DEFAULT 0,
ALTER COLUMN "views" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "likes" SET DEFAULT 0,
ALTER COLUMN "likes" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "sales" SET DEFAULT 0,
ALTER COLUMN "sales" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "daily_likes" SET DEFAULT 0,
ALTER COLUMN "daily_likes" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "daily_sales" SET DEFAULT 0,
ALTER COLUMN "daily_sales" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "daily_views" SET DEFAULT 0,
ALTER COLUMN "daily_views" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weekly_likes" SET DEFAULT 0,
ALTER COLUMN "weekly_likes" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weekly_sales" SET DEFAULT 0,
ALTER COLUMN "weekly_sales" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weekly_views" SET DEFAULT 0,
ALTER COLUMN "weekly_views" SET DATA TYPE DOUBLE PRECISION;