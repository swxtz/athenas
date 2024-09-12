import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaMocks } from "src/prisma/mocks";

const prisma = new PrismaClient();

export class PrismaHelpers {
    private logger = new Logger(PrismaHelpers.name);
    async clearDatabase(): Promise<void> {
        const startTime = new Date().getTime();

        const productMock = new PrismaMocks().products();
        const userMock = new PrismaMocks().users();

        this.logger.log("Clearing product table");

        userMock.forEach(async (user) => {
            const userExists = await prisma.user.findUnique({
                where: {
                    email: user.email,
                },
                select: {
                    id: true,
                },
            });

            if (userExists) {
                const userPurchases = await prisma.userPurchases.findMany({
                    where: {
                        userId: user.id,
                    },
                    select: {
                        id: true,
                    },
                });

                if (!userPurchases) {
                    userPurchases.forEach(async (userPurchase) => {
                        const userPurchased = await prisma.userPurchases.delete(
                            {
                                where: {
                                    id: userPurchase.id,
                                },
                                select: {
                                    user: true,
                                },
                            },
                        );

                        this.logger.log(
                            `Deleted user purchases: ${userPurchased.user.email}`,
                        );
                    });
                }

                const deletedUser = await prisma.user.delete({
                    where: {
                        id: userExists.id,
                    },
                    select: {
                        email: true,
                    },
                });

                this.logger.log(`Deleted user: ${deletedUser.email}`);
            } else {
                this.logger.warn(`User does not exist: ${user.email}`);
            }
        });

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
                        },
                    });
                    this.logger.log(`Deleted product: ${product.name}`);
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
