import Fastify from "fastify";
import fastifyJWT from "@fastify/jwt";
import fastifyCORS from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";

import { usersRoutes } from "@/routes/users/users";
import { env } from "./utils/env";
import { eventsRoutes } from "./routes/events/events";
import { authRoutes } from "./routes/auth/auth";
import { testRoutes } from "./routes/test";


export function server() {
    const app = Fastify();

    // Modules
    app.register(fastifyJWT, { secret: env.jwtSecret });
    app.register(fastifyCORS, { origin: "*" });

    app.register(fastifySwagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "Athenas API",
                description: "Descrição",
                version: "1.0.0",
            },
            servers: [
                {
                    url: "http://localhost:3000",
                    description: "Development server",
                },
            ],
        },
    });

    // Routes
    app.register(usersRoutes);
    app.register(eventsRoutes, { prefix: "/events" });
    app.register(authRoutes, { prefix: "/auth" });
    app.register(testRoutes, { prefix: "/test" });

    return app;
}
