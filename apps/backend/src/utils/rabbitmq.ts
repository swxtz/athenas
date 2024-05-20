import amqp from "amqplib";
import { env } from "./env";

// export const conn = amqp.connect(env.rabbitmqUrl);

export async function createQueueEmail() {
    try {
        const conn = await amqp.connect(env.rabbitmqUrl);
        const channel = await conn.createChannel();

        await channel.assertQueue("teste");

    } catch (e) {
        console.error(e);
    }
}

export async function emailChannel() {
    const conn = await amqp.connect(env.rabbitmqUrl);
    return conn.createChannel();
}
