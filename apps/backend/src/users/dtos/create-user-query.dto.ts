import { IsOptional, IsString } from "class-validator";

export class CreateUserQueryDto {
    @IsOptional()
    @IsString()
    d?: boolean;
}
