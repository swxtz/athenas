import { prisma } from "@/utils/prisma";

interface Email {
    email: string;
}

export async function cleanDB() {
    const emails: Email[] = [{ email: "john.doe@exemple.com" }];

    console.time("delete users 🗑️");

    try {
        await Promise.all([
            await prisma.user.delete({
                where: { email: emails[0].email },
            }),
        ]);
    } catch (err) {
        console.error("");
        return;
    }

    console.timeEnd("delete users 🗑️");
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
