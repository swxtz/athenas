import {
    Controller,
    Get,
    Param,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { OdinService } from "./odin.service";
import { ApiTags } from "@nestjs/swagger";
import { GetScoreByIdDTO } from "./dtos/get-score-by-id.dto";
import { GetScoreBySlugDTO } from "./dtos/get-score-by-slug.dto";

@Controller("odin")
@ApiTags("Odin")
export class OdinController {
    constructor(private odinService: OdinService) {}

    @Get("get-score-by-id/:id")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getScoreById(@Param() param: GetScoreByIdDTO) {
        return this.odinService.getScoreById(param.id);
    }

    @Get("get-score-by-slug/:slug")
    @UsePipes(new ValidationPipe({ transform: true }))
    async getScoreBySlug(@Param() param: GetScoreBySlugDTO) {
        return this.odinService.getScoreBySlug(param.slug);
    }
}
