import express from 'express';
import { createPlayer, getPlayers } from '../controllers/playerControllers';

const router = express.Router();

router.post('/', createPlayer);
router.get('/', getPlayers);

export default router;
