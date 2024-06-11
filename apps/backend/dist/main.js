"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swagger = require("@nestjs/swagger");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    const swaggerConfig = new _swagger.DocumentBuilder().setTitle("Athenas").setDescription("API do ecommerce da RN Distriuidora").setVersion("0.0.0").addTag("e-commerce").build();
    const document = _swagger.SwaggerModule.createDocument(app, swaggerConfig);
    _swagger.SwaggerModule.setup("api-docs", app, document);
    await app.listen(3000);
}
bootstrap();

//# sourceMappingURL=main.js.map