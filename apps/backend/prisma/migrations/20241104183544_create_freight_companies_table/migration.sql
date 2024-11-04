-- CreateTable
CREATE TABLE "FreightCompanies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "km_price" INTEGER NOT NULL,
    "company_picture_url" TEXT NOT NULL,

    CONSTRAINT "FreightCompanies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FreightCompanies_name_key" ON "FreightCompanies"("name");
