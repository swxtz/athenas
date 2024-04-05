/* v8 ignore start */
import { server } from "./server";
import { env } from "./utils/env";

async function start() {
    await server().listen({ port: env.port }).then((address) => {
        console.log(`Server listening on ${address} || http://localhost:${env.port}`);
    });
}

start();
/* v8 ignore stop */
