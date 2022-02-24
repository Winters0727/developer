"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const server = http_1.default.createServer(app_1.default);
const port = process.env.PORT || 3000;
server.listen(port);
server.on('error', (error) => {
    console.error(error);
});
server.on('listening', () => {
    console.log(`server is listening port ${port}`);
});
