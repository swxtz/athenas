import { afterAll, describe, expect, it, afterEach } from "vitest";
import request from "supertest";
import { server } from "@/server";
import type { CreateUserDto } from "./schema/create-user";
import { cleanDB, sleep } from "@/tests/helpers";

const users: CreateUserDto[] = [
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "teste@",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "1234567",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "123456789",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901234",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "",
        document: "12345678901",
    },
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-01-02",
        document: "12345678901",
    }

    
];

describe("Users", () => {
    describe("POST /users", async () => {
        const app = server();
        await app.ready();
        const response = await request(app.server);

        afterEach(async () => {
            await cleanDB();
        });

        afterAll(async () => {
            await cleanDB();
            await app.close();
        });
        it("should create a new user", async () => {
            const res = await response.post("/users").send(users[0]);
            expect(res.status).toBe(201);
        });

        it("should not be possible to create a user without email", async () => {
            const res = await response.post("/users").send(users[1]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user with an existing email", async () => {
            
            const tmp = await response.post("/users").send(users[0]);
            console.log(tmp);
            const res = await response.post("/users").send(users[0]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user with an invalid email", async () => {
            const res = await response.post("/users").send(users[2]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user without a name", async () => {
            const res = await response.post("/users").send(users[3]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user without a password", async () => {
            const res = await response.post("/users").send(users[4]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user with a password less than 8 characters", async () => {
            const res = await response.post("/users").send(users[5]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user with a document less than 11 characters", async () => {
            const res = await response.post("/users").send(users[6]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user with a document longer than 12 characters", async () => {
            const res = await response.post("/users").send(users[7]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user without a birthdate", async () => {
            const res = await response.post("/users").send(users[8]);
            expect(res.status).toBe(400);
        });

        it("should not be possible to create a user without valid birthdate", async () => {
            const res = await response.post("/users").send(users[9]);
            expect(res.status).toBe(400);
        });
    });

    describe("GET /users", async () => {
        const app = server();
        await app.ready();
        const response = await request(app.server);
        
        it("should return a list of users", async () => {
            const res = await response.get("/users");
            expect(res.status).toBe(200);
        });
    });
});