import Fastify from "fastify";
import fastifyJWT from "@fastify/jwt";
import fastifyCORS from "@fastify/cors";

import { usersRoutes } from "@/routes/users/users";
import { env } from "./utils/env";
import { eventsRoutes } from "./routes/events/events";
import { authRoutes } from "./routes/auth/auth";

export function server() {
    const app = Fastify();

    // Modules
    app.register(fastifyJWT, { secret: env.jwtSecret });
    app.register(fastifyCORS, { origin: "*" });

    // Routes
    app.register(usersRoutes);
    app.register(eventsRoutes, { prefix: "/events" });
    app.register(authRoutes, { prefix: "/auth" });


    return app;
}