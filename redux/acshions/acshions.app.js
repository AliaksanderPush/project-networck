"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorOn = exports.errorOff = exports.loaderOff = exports.loaderOn = void 0;
const app_types_1 = require("../types/app.types");
function loaderOn() {
    return {
        type: app_types_1.AppActionTypes.LOADER_DISPLAY_ON,
    };
}
exports.loaderOn = loaderOn;
function loaderOff() {
    return {
        type: app_types_1.AppActionTypes.LOADER_DISPLAY_OFF,
    };
}
exports.loaderOff = loaderOff;
function errorOff() {
    return {
        type: app_types_1.AppActionTypes.ERROR_DISPLAY_OFF,
        payload: null,
    };
}
exports.errorOff = errorOff;
function errorOn(err) {
    return {
        type: app_types_1.AppActionTypes.ERROR_DISPLAY_ON,
        payload: err,
    };
}
exports.errorOn = errorOn;
