import { $Enums } from "@prisma/client";

interface PrismaResponse {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    emailVerificatedAt: Date;
    userType: $Enums.UserType[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserResponse {
    message: string | number | Buffer;
    data: PrismaResponse | null;
}
