import { emailChannel } from "@/utils/rabbitmq";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function testRoutes(app: FastifyInstance) {
    app.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
        const channel = await emailChannel();
        channel.assertQueue("teste");
        channel.sendToQueue("teste", Buffer.from("Hello World!"));
        
        
    });

    app.get("/get", async (req: FastifyRequest, reply: FastifyReply) => {
        const channel = await emailChannel();
        await channel.assertQueue("teste");
        await channel.consume("teste", (msg) => {
            console.log(Buffer.from(msg?.content).toString());
        });

        
    });
}