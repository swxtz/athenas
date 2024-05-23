import { prisma } from "@/utils/prisma";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema } from "./schema/create-user";
import { z } from "zod";
import { argon } from "@/utils/argon";
import { env } from "@/utils/env";

export async function usersRoutes(app: FastifyInstance) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        const users = await prisma.user.findMany();

        return users;
    });

    app.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { email, name, birthdate, document, password } =
                createUserSchema.parse(request.body);

            const verifyUser = await prisma.user.findUnique({
                where: {
                    email,
                },
                select: {
                    email: true,
                },
            });

            if (verifyUser) {
                return reply.status(400).send({
                    message: "E-mail já cadastrado",
                });
            }
            const hash = await argon.hash(password);

            const emailJwt = await app.jwt.sign({
                email, 
            }, {
                expiresIn: 1800 //30 minutos
            });

            // rabbit aqui
            
            const verifyUrl = `${env.frontendUrl}/verify-email?code=${emailJwt}`;

            console.log(verifyUrl);

            // final do rabbit


            await prisma.user.create({
                data: {
                    birthdate,
                    document,
                    email,
                    name,
                    password: hash,
                    emailVerifiedToken: emailJwt
                },
            });

            return reply.code(201).send({
                message: "Criado com sucesso",
            });
            /* v8 ignore next 20 */
        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });
}
