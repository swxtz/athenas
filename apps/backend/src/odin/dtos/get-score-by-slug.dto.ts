import { IsNotEmpty, IsString } from "class-validator";
import { IsLowercase } from "../decorators/is-lowercase.decorator";

export class GetScoreBySlugDTO {
    @IsLowercase({
        message: "Slug deve ser em letra minúscula, sem números e espaços",
    })
    @IsString()
    @IsNotEmpty()
    slug: string;
}
