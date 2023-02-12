"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var profile_entity_1 = require("../../profile/profile.entity");
var user_entity_1 = require("../entities/user.entity");
var UsersService = /** @class */ (function () {
    ////___________________VALIDAR USUARIO CUANDO YA EXISTE EN LA BASE DE DATOS_________________
    function UsersService(userRepository, profileRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
    }
    // createUser(user: CreateUserDto){
    //     const newUser = this.userRepository.create(user)
    //     return this.userRepository.save(newUser)
    // }
    ///__________PARA LA VALIDACION________
    UsersService.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var userFoud, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                username: user.username
                            }
                        })];
                    case 1:
                        userFoud = _a.sent();
                        if (userFoud) {
                            return [2 /*return*/, new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT)];
                        }
                        newUser = this.userRepository.create(user);
                        return [2 /*return*/, this.userRepository.save(newUser)];
                }
            });
        });
    };
    ////___________________VALIDAR USUARIO CUANDO YA EXISTE EN LA BASE DE DATOS_________________
    UsersService.prototype.getUsers = function () {
        return this.userRepository.find();
    };
    // getUser(id:number){
    //     return this.userRepository.findOne({where:{id}})
    // }
    ///__________PARA LA VALIDACION________
    UsersService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: id } })];
                    case 1:
                        userFound = _a.sent();
                        if (!userFound) {
                            return [2 /*return*/, new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND)];
                        }
                        return [2 /*return*/, userFound];
                }
            });
        });
    };
    ////___________________VALIDAR USUARIO CUANDO NO EXISTE EN LA BASE DE DATOS ALGUN USUARIO_________________
    // deleteUser(id:number){
    //     return this.userRepository.delete({id})
    // }
    ///__________PARA LA VALIDACION________
    UsersService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository["delete"]({ id: id })];
                    case 1:
                        result = _a.sent();
                        if (result.affected === 0) {
                            return [2 /*return*/, new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND)];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ////___________________VALIDAR USUARIO CUANDO YA HA SIDO BORRADO Y NO EXISTE EN LA BASE DE DATOS ALGUN USUARIO_________________
    UsersService.prototype.updateUser = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var userFoud, updateUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: id } })];
                    case 1:
                        userFoud = _a.sent();
                        if (!userFoud) {
                            return [2 /*return*/, new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND)];
                        }
                        updateUser = Object.assign(userFoud, user);
                        return [2 /*return*/, this.userRepository.save(updateUser)];
                }
            });
        });
    };
    UsersService.prototype.createProfile = function (id, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var userFoud, newProfile, savedProfile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ where: { id: id } })];
                    case 1:
                        userFoud = _a.sent();
                        if (!userFoud) {
                            return [2 /*return*/, new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND)];
                        }
                        newProfile = this.profileRepository.create(profile);
                        return [4 /*yield*/, this.profileRepository.save(newProfile)];
                    case 2:
                        savedProfile = _a.sent();
                        userFoud.profile = savedProfile;
                        return [2 /*return*/, this.userRepository.save(userFoud)];
                }
            });
        });
    };
    UsersService.prototype.getProfile = function () {
        return this.profileRepository.find();
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
        __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
