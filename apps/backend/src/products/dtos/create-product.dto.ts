import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const schema = z.object({
    name: z
        .string()
        .min(3, "Nome deve ter no minimo 3 caracteres")
        .max(255, "Nome deve ter no maximo 255 caracteres"),
    description: z
        .string()
        .min(3, "A descrição deve ter no minimo 3 caracteres")
        .max(2000, "Descrição deve ter no maximo 2000 caracteres"),

    price: z.number().min(0, "Preço deve ser maior que 0"),
    buyPrice: z.number().min(0, "Preço de compra deve ser maior que 0"),
    stockQuantity: z.number().min(0, "Quantidade deve ser maior que 0"),
    barcode: z.string().optional(),
    productType: z.enum(["bread", "hamburger", "others"]),
});

export class CreateProductDTO extends createZodDto(schema) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    buyPrice: number;
    @ApiProperty()
    stockQuantity: number;
    @ApiProperty()
    barcode?: string;
    @ApiPropertyOptional()
    coverImage: string;
    @ApiProperty()
    isAvailable: boolean;
    @ApiProperty()
    productType: "bread" | "hamburger" | "others";
}
