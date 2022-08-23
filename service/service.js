"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.putAvatar = exports.upLoadFileImage = exports.fogotPassword = exports.upDatepass = exports.getUsers = exports.putUser = exports.upLoadImage = exports.logoutSite = exports.getRefreshToken = exports.autorization = exports.registration = void 0;
const axios_1 = __importDefault(require("axios"));
const auth_service_1 = require("./auth-service");
function registration(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.post('/auth/register', user);
    });
}
exports.registration = registration;
function autorization(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.post('/auth/login', user);
    });
}
exports.autorization = autorization;
function getRefreshToken() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.get('/auth/refresh');
    });
}
exports.getRefreshToken = getRefreshToken;
function logoutSite() {
    return __awaiter(this, void 0, void 0, function* () {
        return auth_service_1.api.post('/auth/logout');
    });
}
exports.logoutSite = logoutSite;
function upLoadImage(base64) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield auth_service_1.api.post('/auth/upload-avatar', { image: base64 });
        return data;
    });
}
exports.upLoadImage = upLoadImage;
function putUser(id, newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.put(`/user/${id}`, newUser);
    });
}
exports.putUser = putUser;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.get(`${auth_service_1.API_URL}/user`);
    });
}
exports.getUsers = getUsers;
function upDatepass(pass) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.post(`/auth/update-password`, { pass: pass });
    });
}
exports.upDatepass = upDatepass;
function fogotPassword(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.post(`${auth_service_1.API_URL}/auth/fogot-password`, { email });
    });
}
exports.fogotPassword = fogotPassword;
function upLoadFileImage(formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield auth_service_1.api.post(`/upload`, formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    });
}
exports.upLoadFileImage = upLoadFileImage;
function putAvatar(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield auth_service_1.api.post(`/avatar`, { path });
    });
}
exports.putAvatar = putAvatar;
function resetPassword(password, resetCode) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.post(`${auth_service_1.API_URL}/auth/reset-password`, { password, resetCode });
    });
}
exports.resetPassword = resetPassword;
