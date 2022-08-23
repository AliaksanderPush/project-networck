"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.API_HOME_URL = exports.API_URL1 = exports.API_URL = void 0;
const axios_1 = __importDefault(require("axios"));
exports.API_URL = 'http://192.168.0.147:4000';
exports.API_URL1 = 'http://192.168.1.150:4000';
exports.API_HOME_URL = 'http://192.168.0.144:4000';
exports.api = axios_1.default.create({
    baseURL: exports.API_URL,
});
