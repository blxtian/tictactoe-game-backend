import { Request, Response } from 'express';
import Player from '../models/playerModel';

export const createPlayer = async (req: Request, res: Response) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
  }
};

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
  }
};
