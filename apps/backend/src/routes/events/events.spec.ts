import { PostEventDTO } from "./schemas/post-event";
import { afterAll, describe, expect, it, afterEach } from "vitest";
import { cleanDB } from "@/tests/helpers";
import request from "supertest";
import { server } from "@/server";


const events: PostEventDTO[] = [
    {
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        name: "",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        //menor q 403 caracteres//
        name: "TERRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        //tem que ter imagem//
        name: "TERRA",
        imageUrl: "",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        //link invalido//
        name: "TERRA",
        imageUrl: "pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        // o valor deve ser inteiro// 
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999.00,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        // preço deve ser positivo //
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: -9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        // deve ter atração principal // 
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        // deve ter endereço 
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "",
        date: "2024-04-04T22:18:05.629Z"
    },
    {
        // o evento precisa ter data
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: ""
    },
    {
        // a data deve ser válida
        name: "TERRA",
        imageUrl: "https://pbs.twimg.com/media/FvN6JUnWIAEaXDV?format=jpg&name=240x240",
        price: 9999,
        mainAttraction: "Péricles",
        location: "av 8 de maio 174 ap 14",
        date: "2024-04-04"
    }
];

describe("Events", () => {
    describe("POST /events", async () => {
        const app = server();
        await app.ready();
        const response= await request(app.server);

        afterEach(async () => {
            await cleanDB();
        });

        afterAll(async () => {
            await cleanDB();
            await app.close();
        });
        it("should create a new event", async () => {
            const res = await response.post("/users").send(events[0]);
            expect(res.status).toBe(201);
        });
        it("should not be possible to create a event with", async () => {
            
            await response.post("/users").send(events[0]);
            const res = await response.post("/users").send(events[0]);
            expect(res.status).toBe(400);
        });
        it("should ", async () => {
            const res = await response.post("/users").send(events[1]);
            expect(res.status).toBe(400);
        });

    });
});