import "@fastify/jwt";

declare module "@fastify/jwt" {
    interface FastifyJWT {
        user: {
            id: string;
            name: string;
            email: string;
            createdAt: string;
            updatedAt: string;
        }
    }
}