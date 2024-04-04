import Fastify from "fastify";
import { usersRoutes } from "@/routes/users/users";
import fastifyJWT from "@fastify/jwt";
import { env } from "./utils/env";

export function server() {
    const app = Fastify();

    // Modules
    app.register(fastifyJWT, { secret: env.jwtSecret });

    // Routes
    app.register(usersRoutes);
    

    return app;
}