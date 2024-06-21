import { $Enums } from "@prisma/client";

export class UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    userType: $Enums.UserType;
    createdAt: Date;
    updatedAt: Date;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}
