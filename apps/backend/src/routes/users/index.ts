import { prisma } from "@/utils/prisma";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema } from "./schema/create-user";
import { z } from "zod";

export async function usersRoutes(app: FastifyInstance) {
    app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        const users = await prisma.user.findMany();

        return users;
    });

    app.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { email, name } = createUserSchema.parse(request.body);

            await prisma.user.create({
                data: {
                    email,
                    name
                }
            });

            return reply.code(201).send({
                message: "Criado com sucesso"
            });
        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });
}