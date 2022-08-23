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
exports.fetchAllUsers = exports.upDateAvatar = exports.checkUser = exports.logOut = exports.updateUser = exports.addUserState = exports.fetchUser = void 0;
const user_types_1 = require("../types/user.types");
const service_1 = require("../../service/service");
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const acshions_app_1 = require("./acshions.app");
const friends_types_1 = require("../types/friends.types");
const socket_types_1 = require("../types/socket.types");
const fetchUser = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            const response = yield (0, service_1.autorization)(user);
            const { data } = response;
            yield async_storage_1.default.setItem('@auth', JSON.stringify(data.token));
            dispatch({
                type: user_types_1.UserActionTypes.LOAD_USER_SUCCESS,
                payload: data,
            });
            dispatch((0, acshions_app_1.loaderOff)());
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.fetchUser = fetchUser;
const addUserState = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            const response = yield (0, service_1.registration)(user);
            const { data } = response;
            yield async_storage_1.default.setItem('@auth', JSON.stringify(data.token));
            dispatch((0, acshions_app_1.loaderOff)());
            dispatch({
                type: user_types_1.UserActionTypes.LOAD_USER_SUCCESS,
                payload: data,
            });
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.addUserState = addUserState;
const updateUser = (id, newUser) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            const response = yield (0, service_1.putUser)(id, newUser);
            const { data } = response;
            yield async_storage_1.default.setItem('@auth', JSON.stringify(data.token));
            dispatch((0, acshions_app_1.loaderOff)());
            dispatch({
                type: user_types_1.UserActionTypes.UPDATE_USER,
                updateUser: data,
            });
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.updateUser = updateUser;
const logOut = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            yield async_storage_1.default.removeItem('@auth');
            dispatch({
                type: user_types_1.UserActionTypes.SINGOUT_USER,
            });
            dispatch({
                type: friends_types_1.FriendsActionTypes.LOGOUT_USER,
            });
            dispatch({
                type: socket_types_1.LoadSocketsActionTypes.CLEAR_SOCKET,
            });
            yield (0, service_1.logoutSite)();
            dispatch((0, acshions_app_1.loaderOff)());
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.logOut = logOut;
const checkUser = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield (0, service_1.getRefreshToken)();
            const { data } = response;
            yield async_storage_1.default.setItem('@auth', JSON.stringify(data.token));
            dispatch({
                type: user_types_1.UserActionTypes.LOAD_USER_SUCCESS,
                payload: data,
            });
        }
        catch (err) {
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.checkUser = checkUser;
const upDateAvatar = (form) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            const path = yield (0, service_1.upLoadFileImage)(form);
            const response = yield (0, service_1.putAvatar)(path);
            dispatch({
                type: user_types_1.UserActionTypes.UPDATE_AVATAR,
                img: response.data,
            });
            dispatch((0, acshions_app_1.loaderOff)());
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.upDateAvatar = upDateAvatar;
const fetchAllUsers = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch((0, acshions_app_1.loaderOn)());
            const response = yield (0, service_1.getUsers)();
            dispatch({
                type: user_types_1.UserActionTypes.GET_ALL_USERS,
                users: response.data,
            });
            dispatch((0, acshions_app_1.loaderOff)());
        }
        catch (err) {
            console.log(err);
            dispatch((0, acshions_app_1.errorOn)(err.response.data));
        }
    });
};
exports.fetchAllUsers = fetchAllUsers;
