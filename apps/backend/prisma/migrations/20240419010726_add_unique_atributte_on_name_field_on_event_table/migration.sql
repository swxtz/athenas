/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_name_key" ON "events"("name");
