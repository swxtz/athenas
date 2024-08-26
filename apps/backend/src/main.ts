import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle("Athenas")
        .setDescription("API do ecommerce da RN Distriuidora")
        .setVersion("0.0.0")
        .addTag("e-commerce")
        .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("api-docs", app, document);

    app.enableCors();

    await app.listen(3001);
}
bootstrap();
