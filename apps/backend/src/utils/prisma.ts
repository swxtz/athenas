import { PrismaClient } from "@prisma/client";
import { env } from "./env";

let prisma: PrismaClient;

if (env.dev) {
    prisma = new PrismaClient({
        log: ["query", "info", "warn", "error"],
    });
} else {
    prisma = new PrismaClient();
}

export { prisma };

