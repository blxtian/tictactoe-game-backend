"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerControllers_1 = require("../controllers/playerControllers");
const router = express_1.default.Router();
router.post('/', playerControllers_1.createPlayer);
router.get('/', playerControllers_1.getPlayers);
exports.default = router;
