import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { postEventSchema } from "./schemas/post-event";
import { z } from "zod";
import { prisma } from "@/utils/prisma";
import { getEventByNameSchema } from "./schemas/get-event-by-name";


export async function eventsRoutes(app: FastifyInstance) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.get("/all", async (request: FastifyRequest, reply: FastifyReply) => {
        const event = await prisma.event.findMany();

        return event;
    });

    app.post("/", async (req: FastifyRequest, reply: FastifyReply) => {
        //autenticação

        try {
            const { date, imageUrl, location, mainAttraction, name, price } = postEventSchema.parse(req.body);

            const verifyEvent = await prisma.event.findUnique({
                where: { name: name }
            });

            if (verifyEvent) {
                return reply.code(400).send({ message: "Este nome já está sendo utilizado" });

            }

            if (price < 0) {
                return reply.code(400).send({ message: "O preço não pode ser negativo" });
            }

            const event = await prisma.event.create({
                data: {
                    date,
                    imageUrl,
                    location,
                    mainAttraction,
                    name,
                    price,
                }
            });


            return reply.code(201).send({ message: "Evento criado com sucesso", data: { ...event } });


        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });


    app.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const events = await prisma.event.findMany();

            return reply.code(200).send({ date: { ...events } });
        } catch (err) {
            if (err instanceof z.ZodError) {
                reply.status(400).send({ message: err });
                return;
            }

            console.log(`Erro no servidor: ${err}`);
        }
    });

    app.get(
        "/:name",
        async (request: FastifyRequest, reply: FastifyReply) => {
            try {
                const { name } = getEventByNameSchema.parse(request.params);

                const names = await prisma.event.findFirst({ 
                    where: { name: name }
                });  
                
                if (!names) {
                    return reply.status(404).send({ message: "Evento não encontrado" });
                }

                return reply.status(200).send({ message: "Evento encontrado" });
            }
            catch (err) {
                if (err instanceof z.ZodError) {
                    reply.status(400).send({ message: err });
                    return;
                }
    
                console.log(`Erro no servidor: ${err}`);
            }
        },
    );
}