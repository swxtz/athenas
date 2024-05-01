import { afterAll, describe, expect, it, afterEach } from "vitest";
import { CreateUserDto } from "../users/schema/create-user";
import { AuthUserDTO } from "./schemas/auth-user";
import { cleanDB } from "@/tests/helpers";
import { server } from "@/server";
import request from "supertest";

const user:CreateUserDto[]=[
    {
        name: "Jonh Doe",
        email: "john.doe@exemple.com",
        password: "12345678",
        birthdate: "2024-04-04T22:18:05.629Z",
        document: "12345678901",
    }
];
const auth: AuthUserDTO[] = [
    {
        email: "jorge1@gmail.com",
        password: "jorge123"
    },
    {
        email: "jorge1@gmail.com",
        password: ""
    },
    {
        email: "jorge1gmail.com",
        password: "jorge123"
    },
    {
        email: "",
        password: "jorge123"
    },
    {
        email: "jorge1@gmail.com",
        password:"jorge"
    }
    
];
describe("Users", () => {
    describe("POST /auth", async () => {
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
            const res = await response.post("/auth").send(user[0]);
            expect(res.status).toBe(201);
        });
        it("should no possible create a email without password", async() =>{
            const res = await response.post("/auth").send(user[1]);
            expect(res.status).toBe(400);
        });
        it("should no possible create a user with an invalid email", async() =>{
            const res = await response.post("/auth").send(user[2]);
            expect(res.status).toBe(400);
        });
        it("should no possible create a user without a email", async() =>{
            const res = await response.post("/auth").send(user[3]);
            expect(res.status).toBe(400);
        });
        it("should no possible create a password shorter than 8 characters", async() =>{
            const res = await response.post("/auth").send(user[4]);
            expect(res.status).toBe(400);
        });
        it("should not be possible to create a user with an existing email", async () => {
            await response.post("/auth").send(user[5]);
            const res = await response.post("/auth").send(user[5]);
            expect(res.status).toBe(400);
        });
    });
});