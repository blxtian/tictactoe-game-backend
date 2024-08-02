import mongoose, { Document, Schema } from 'mongoose';

interface IPlayer extends Document {
  name: string;
  wins: number;
  losses: number;
  draws: number;
}

const playerSchema = new Schema<IPlayer>({
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    default: 0,
  },
  losses: {
    type: Number,
    default: 0,
  },
  draws: {
    type: Number,
    default: 0,
  },
});

const Player = mongoose.model<IPlayer>('Player', playerSchema);

export default Player;
