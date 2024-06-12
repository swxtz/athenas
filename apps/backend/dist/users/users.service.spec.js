"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _usersservice = require("./users.service");
describe("UsersService", ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _usersservice.UsersService
            ]
        }).compile();
        service = module.get(_usersservice.UsersService);
    });
    it("should be defined", ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=users.service.spec.js.map