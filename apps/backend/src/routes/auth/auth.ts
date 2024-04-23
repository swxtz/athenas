import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authUserSchema } from "./schemas/auth-user";
import { prisma } from "@/utils/prisma";
import { z } from "zod";

export async function authRoutes(app: FastifyInstance) {
    app.post("/", async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const { email, password } = authUserSchema.parse(req.body)

            const verifyUser = await prisma.user.findUnique({
                where: { email: email },
                select: { email: true, password: true }
            });

            if (!verifyUser) {
                return reply.code(401).send({ message: "Email ou senha inválido" });
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });
}