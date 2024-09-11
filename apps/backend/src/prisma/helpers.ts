import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaMocks } from "src/prisma/mocks";

const prisma = new PrismaClient();

export class PrismaHelpers {
    private logger = new Logger(PrismaHelpers.name);
    async clearDatabase(): Promise<void> {
        const startTime = new Date().getTime();

        const productMock = new PrismaMocks().products();

        this.logger.log("Clearing product table");

        Promise.all([
            productMock.forEach(async (product) => {
                const productExists = await prisma.product.findFirst({
                    where: {
                        name: product.name,
                    },
                    select: {
                        id: true,
                        name: true,
                    },
                });

                const recommendationTable =
                    await prisma.recommendation.findUnique({
                        where: {
                            productId: productExists.id,
                        },
                    });

                if (recommendationTable) {
                    await prisma.recommendation.delete({
                        where: {
                            productId: productExists.id,
                        },
                    });
                    this.logger.log(`Deleted recommendation: ${product.name}`);
                }

                if (productExists) {
                    await prisma.product.delete({
                        where: {
                            name: product.name,
                            id: product.id,
                        },
                    });
                    this.logger.log(
                        `Deleted product: ${(product.name, product.id)}`,
                    );
                } else {
                    this.logger.warn(`Product does not exist: ${product.name}`);
                }
            }),
        ]);

        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        this.logger.log(`Cleared product table in ${duration}ms`);
    }
}
