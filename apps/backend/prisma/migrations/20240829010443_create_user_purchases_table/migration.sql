-- CreateTable
CREATE TABLE "user_purchases" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_link" TEXT NOT NULL,
    "product_slug" TEXT NOT NULL,
    "product_values" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_purchases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_purchases_product_id_key" ON "user_purchases"("product_id");

-- AddForeignKey
ALTER TABLE "user_purchases" ADD CONSTRAINT "user_purchases_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
