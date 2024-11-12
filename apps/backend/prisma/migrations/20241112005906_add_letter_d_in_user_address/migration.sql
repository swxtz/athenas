/*
  Warnings:

  - You are about to drop the `UserAdress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserAdress" DROP CONSTRAINT "UserAdress_user_id_fkey";

-- DropTable
DROP TABLE "UserAdress";

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "apartment" BOOLEAN NOT NULL,
    "ap_block" TEXT NOT NULL,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAddress" ADD CONSTRAINT "UserAddress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
