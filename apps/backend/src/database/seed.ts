import { argon } from "@/utils/argon";
import type { User } from "./type";
import { prisma } from "@/utils/prisma";

const users: User[] = [
    {
        name: "João de tal",
        email: "joao@joao.com",
        birthdate: "1970-01-01T00:00:00.000Z",
        document: "12312312333",
        password: "password",
        emailVerifiedToken: "token"
    },

    {
        name: "Maria de tal",
        email: "maria@maria.com",
        birthdate: "1970-01-01T00:00:00.000Z",
        document: "12312312334",
        password: "supersenha",
        emailVerifiedToken: "token"
    },
];

async function seedDB() {
    const hashes: string[] = [];

    for (const user of users) {
        const hash = await argon.hash(user.password);
        hashes.push(hash);
    }

    users.forEach((user, index) => {
        user.password = hashes[index];
    });

    await Promise.all([
        await prisma.user.create({ data: users[0] }),
        await prisma.user.create({ data: users[1] })
    ]);
}

seedDB()
    .then(() => {
        console.log("Database seeded");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
