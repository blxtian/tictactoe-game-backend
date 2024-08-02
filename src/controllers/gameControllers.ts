import { Request, Response } from 'express';
import Game from '../models/gameModel';
import Player from '../models/playerModel';

export const createGame = async (req: Request, res: Response) => {
  try {
    const { player1Id, player2Id, result } = req.body;

    const player1 = await Player.findById(player1Id);
    const player2 = await Player.findById(player2Id);

    if (!player1 || !player2) {
      return res.status(400).json({ error: 'One or both players not found' });
    }

    const game = await Game.create({
      player1: player1Id,
      player2: player2Id,
      result,
    });

    if (result === 'win') {
      await Player.findByIdAndUpdate(player1Id, { $inc: { wins: 1 } });
      await Player.findByIdAndUpdate(player2Id, { $inc: { losses: 1 } });
    } else if (result === 'loss') {
      await Player.findByIdAndUpdate(player1Id, { $inc: { losses: 1 } });
      await Player.findByIdAndUpdate(player2Id, { $inc: { wins: 1 } });
    } else if (result === 'draw') {
      await Player.findByIdAndUpdate(player1Id, { $inc: { draws: 1 } });
      await Player.findByIdAndUpdate(player2Id, { $inc: { draws: 1 } });
    }

    res.status(201).json(game);
  } catch (error) {
  }
};

export const getGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find().populate('player1').populate('player2');
    res.status(200).json(games);
  } catch (error) {
  }
};
