import { prisma } from "@/utils/prisma";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function usersRoutes(app: FastifyInstance) {
    app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        const users = await prisma.user.findMany();

        return users;
    });
}