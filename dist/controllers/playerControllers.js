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
exports.getPlayers = exports.createPlayer = void 0;
const playerModel_1 = __importDefault(require("../models/playerModel"));
const createPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield playerModel_1.default.create(req.body);
        res.status(201).json(player);
    }
    catch (error) {
    }
});
exports.createPlayer = createPlayer;
const getPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const players = yield playerModel_1.default.find();
        res.status(200).json(players);
    }
    catch (error) {
    }
});
exports.getPlayers = getPlayers;
