-- CreateTable
CREATE TABLE "UserAdress" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" INTEGER NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "apartment" INTEGER NOT NULL,
    "ap_block" INTEGER NOT NULL,

    CONSTRAINT "UserAdress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAdress_user_id_key" ON "UserAdress"("user_id");

-- AddForeignKey
ALTER TABLE "UserAdress" ADD CONSTRAINT "UserAdress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
