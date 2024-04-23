import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authUserSchema } from "./schemas/auth-user";
import { prisma } from "@/utils/prisma";
import { z } from "zod";
import { argon } from "@/utils/argon";

export async function authRoutes(app: FastifyInstance) {
    app.post("/", async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const { email, password } = authUserSchema.parse(req.body);

            const verifyUser = await prisma.user.findUnique({
                where: { email: email },
                select: { email: true, password: true }
            });

            if (!verifyUser) {
                return reply.code(401).send({ message: "Email ou senha inválido" });
            }

            const verifyHash = await argon.verify(verifyUser.password, password);

            if (!verifyHash) {

                return reply.code(401).send({ message: "Email ou senha inválido" });
            }

            const user = await prisma.user.findUnique({
                where: { email: email },
                select: { id: true, email: true, name: true, createdAt: true, updatedAt: true }
            });

            const token = app.jwt.sign({ 
                id: user?.id,
                name: user?.name,
                email: user?.email,
                createdAt: user?.createdAt,
                updatedAt: user?.updatedAt
                
            }, {
                sub: user?.id,
                expiresIn: "30 days",
            });

            return reply.code(200).send({ message: "Usuario autenticado com sucesso!",  data: { token } });

        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });
}