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
exports.getGames = exports.createGame = void 0;
const gameModel_1 = __importDefault(require("../models/gameModel"));
const playerModel_1 = __importDefault(require("../models/playerModel"));
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { player1Id, player2Id, result } = req.body;
        const player1 = yield playerModel_1.default.findById(player1Id);
        const player2 = yield playerModel_1.default.findById(player2Id);
        if (!player1 || !player2) {
            return res.status(400).json({ error: 'One or both players not found' });
        }
        const game = yield gameModel_1.default.create({
            player1: player1Id,
            player2: player2Id,
            result,
        });
        if (result === 'win') {
            yield playerModel_1.default.findByIdAndUpdate(player1Id, { $inc: { wins: 1 } });
            yield playerModel_1.default.findByIdAndUpdate(player2Id, { $inc: { losses: 1 } });
        }
        else if (result === 'loss') {
            yield playerModel_1.default.findByIdAndUpdate(player1Id, { $inc: { losses: 1 } });
            yield playerModel_1.default.findByIdAndUpdate(player2Id, { $inc: { wins: 1 } });
        }
        else if (result === 'draw') {
            yield playerModel_1.default.findByIdAndUpdate(player1Id, { $inc: { draws: 1 } });
            yield playerModel_1.default.findByIdAndUpdate(player2Id, { $inc: { draws: 1 } });
        }
        res.status(201).json(game);
    }
    catch (error) {
    }
});
exports.createGame = createGame;
const getGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield gameModel_1.default.find().populate('player1').populate('player2');
        res.status(200).json(games);
    }
    catch (error) {
    }
});
exports.getGames = getGames;
