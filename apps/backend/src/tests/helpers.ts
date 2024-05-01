import { prisma } from "@/utils/prisma";

interface Email {
    email: string;
}

interface Name {
    name: string;
}

export async function cleanDB() {
    const emails: Email[] = [{ email: "john.doe@exemple.com" }];
    const names: Name[] = [{ name: "TERRA" }];

    console.time("clean up tables 🗑️");

    try {
        await Promise.all([
            await prisma.user.delete({
                where: { email: emails[0].email },
            }),
            await prisma.event.delete({
                where: { name: names[0].name }
            })
        ]);
    } catch (err) {
        console.error("");
        return;
    }

    console.timeEnd("clean up tables 🗑️");
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
