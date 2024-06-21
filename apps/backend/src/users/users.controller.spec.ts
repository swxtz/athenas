import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { CreateUserPromise, UsersService } from "./users.service";
import { UserEntity } from "./entity/user.entity";

const newUserList: CreateUserPromise[] = [
    {
        message: "Usuario criado com sucesso",
        data: new UserEntity({
            id: "testeid",
            name: "John Doe",
            email: "john.joe@example.com",
            createdAt: new Date(),
            updatedAt: new Date(),
            password: "test1234",
            userType: "consumer",
        }),
    },
];

describe("UsersController", () => {
    let controller: UsersController;
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: {
                        createUser: jest.fn().mockResolvedValue(newUserList),
                    },
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
        expect(service).toBeDefined();
    });

    describe("createUser", () => {
        it("should call createUser method successfully", async () => {
            const user = new UserEntity({
                name: "John Doe",
                email: "john.doe@exampleacom",
                password: "test1234",
                userType: "consumer",
            });

            const result = await controller.createUser(user);

            expect(result).toEqual(newUserList);
            expect(result[0].message).toBe("Usuario criado com sucesso");
            expect(result[0].data).toBeInstanceOf(UserEntity);
            expect(result[0].data.id).toBe("testeid");
            expect(service.createUser).toHaveBeenCalledTimes(1);
        });
    });
});
