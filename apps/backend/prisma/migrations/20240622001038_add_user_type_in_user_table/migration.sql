-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('consumer', 'admim');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_type" "UserType"[] DEFAULT ARRAY['consumer']::"UserType"[];
