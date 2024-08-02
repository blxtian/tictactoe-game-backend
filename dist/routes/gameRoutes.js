"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gameControllers_1 = require("../controllers/gameControllers");
const router = express_1.default.Router();
router.route('/').post(gameControllers_1.createGame).get(gameControllers_1.getGames);
exports.default = router;
