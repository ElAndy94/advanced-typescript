"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./math/circle");
const rectangle_1 = __importDefault(require("./math/rectangle"));
console.log(circle_1.PI);
console.log(circle_1.calculateCircumference(10));
console.log(rectangle_1.default(20, 50));
