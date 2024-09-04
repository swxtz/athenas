/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `user_purchases` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `user_purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_purchases" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_purchases_user_id_key" ON "user_purchases"("user_id");

-- AddForeignKey
ALTER TABLE "user_purchases" ADD CONSTRAINT "user_purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
