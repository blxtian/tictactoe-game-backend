import express from 'express';
import { createGame, getGames } from '../controllers/gameControllers';

const router = express.Router();

router.route('/').post(createGame).get(getGames);

export default router;
