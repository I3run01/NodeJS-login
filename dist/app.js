"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const usersRouter_1 = __importDefault(require("./router/usersRouter"));
const filesRouter_1 = __importDefault(require("./router/filesRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoDB_1 = require("./database/mongoDB");
dotenv_1.default.config();
(0, mongoDB_1.mongoConnect)();
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: ['https://yournote.cloud', process.env.LOCALHOST],
    credentials: true
}));
server.use(body_parser_1.default.json());
server.use((0, cookie_parser_1.default)());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static(__dirname + '/public'));
server.use('/api/users', usersRouter_1.default);
server.use('/api/files', filesRouter_1.default);
server.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});
exports.default = server;
