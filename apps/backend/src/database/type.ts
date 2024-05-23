import type { CreateUserDto } from "@/routes/users/schema/create-user";

export interface User extends CreateUserDto {
    emailVerifiedToken: string;
}