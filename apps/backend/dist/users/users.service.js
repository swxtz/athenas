"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersService", {
    enumerable: true,
    get: function() {
        return UsersService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
const _argonservice = require("../argon/argon.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UsersService = class UsersService {
    async createUser(user) {
        const { email, name, password } = user;
        const verifyUser = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        if (verifyUser) {
            throw new _common.HttpException("Esse email ja esta cadastrado.", 400);
        }
        try {
            const user = await this.prisma.user.create({
                data: {
                    email,
                    name,
                    password: await this.argon.hash(password)
                }
            });
            return {
                message: "usuario criado com sucesso",
                data: {
                    ...user
                }
            };
        } catch (err) {
            console.log(err);
            throw new _common.HttpException(err, 500);
        }
    }
    constructor(prisma, argon){
        this.prisma = prisma;
        this.argon = argon;
    }
};
UsersService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _argonservice.ArgonService === "undefined" ? Object : _argonservice.ArgonService
    ])
], UsersService);

//# sourceMappingURL=users.service.js.map