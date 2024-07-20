import { IsString } from "class-validator";

export class UploadCoverImageParams {
    @IsString()
    id: string;
}
