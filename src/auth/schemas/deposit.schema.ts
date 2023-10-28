import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

@Schema({
  timestamps: true,
})
export class Deposit {
  @Prop({ required: true, type: Number })
  amount: number;


  @Prop({ type: String, ref: 'User' })
  user: User; 
}

export const DepositSchema = SchemaFactory.createForClass(Deposit);