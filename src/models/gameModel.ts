import mongoose, { Document, Schema } from 'mongoose';

interface IGame extends Document {
  player1: mongoose.Types.ObjectId; 
  player2: mongoose.Types.ObjectId; 
  result: 'win' | 'loss' | 'draw';
}

const gameSchema = new Schema<IGame>({
  player1: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  player2: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  result: {
    type: String,
    enum: ['win', 'loss', 'draw'],
    required: true,
  },
});

const Game = mongoose.model<IGame>('Game', gameSchema);

export default Game;
