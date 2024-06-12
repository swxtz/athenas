"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CreateUserDTO", {
    enumerable: true,
    get: function() {
        return CreateUserDTO;
    }
});
const _swagger = require("@nestjs/swagger");
const _nestjszod = require("nestjs-zod");
const _zod = require("zod");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const schema = _zod.z.object({
    email: _zod.z.string({
        message: "deve ser um texto"
    }).email("deve ser um email valido").min(3, "deve ter no minimo 3 letras"),
    password: _zod.z.string({
        message: "deve ser um texto"
    }).min(6, "deve ter no minimo 6 caracteres"),
    name: _zod.z.string({
        message: "deve ser um texto"
    }).min(3, "deve ter no minimo 3 letras")
});
let CreateUserDTO = class CreateUserDTO extends (0, _nestjszod.createZodDto)(schema) {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    _ts_metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);

//# sourceMappingURL=create-user.dto.js.map