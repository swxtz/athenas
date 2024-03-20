import Fastify from "fastify";
import { usersRoutes } from "@/routes/users";

export function server() {
    const app = Fastify();

    app.register(usersRoutes);

    return app;
}