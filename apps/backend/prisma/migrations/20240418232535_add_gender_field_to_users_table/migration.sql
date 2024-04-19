-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Female', 'Male', 'Other');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "gender" "Gender";
