import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";

export async function createNestAppInstance(): Promise<INestApplication> {
    let app: INestApplication;

    const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
        providers: [],
    }).compile();

    // eslint-disable-next-line prefer-const
    app = moduleRef.createNestApplication();

    await app.init();

    return app;
}
