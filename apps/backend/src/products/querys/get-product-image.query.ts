import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetProductImageQuery {
    @ApiProperty()
    @IsString()
    slug: string;
}
