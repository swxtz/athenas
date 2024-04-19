/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `used_tickets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "purchased_tickets" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "main_attraction" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "owner_name" TEXT NOT NULL,
    "ticket_type" TEXT NOT NULL,
    "purchased_at" TIMESTAMP(3) NOT NULL,
    "qr_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchased_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "purchased_tickets_id_key" ON "purchased_tickets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "used_tickets_id_key" ON "used_tickets"("id");

-- AddForeignKey
ALTER TABLE "purchased_tickets" ADD CONSTRAINT "purchased_tickets_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
