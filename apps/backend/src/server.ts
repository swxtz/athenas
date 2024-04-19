import Fastify from "fastify";
import { usersRoutes } from "@/routes/users/users";
import fastifyJWT from "@fastify/jwt";
import { env } from "./utils/env";
import { eventsRoutes } from "./routes/events/events";

export function server() {
    const app = Fastify();

    // Modules
    app.register(fastifyJWT, { secret: env.jwtSecret });

    // Routes
    app.register(usersRoutes); 
    app.register(eventsRoutes, { prefix: "/events" });
    

    return app;
}