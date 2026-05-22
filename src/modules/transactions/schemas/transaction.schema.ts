import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { TransactionType } from '../../../common/enums/transaction-type.enum';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({
  timestamps: true,
})
export class Transaction {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  userId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
    index: true,
  })
  categoryId: Types.ObjectId;

  @Prop({
    required: true,
    enum: TransactionType,
  })
  type: TransactionType;

  @Prop({
    required: true,
    min: 0,
  })
  amount: number;

  @Prop({
    trim: true,
    default: '',
  })
  description: string;

  @Prop({
    required: true,
  })
  transactionDate: Date;
}

export const TransactionSchema =
  SchemaFactory.createForClass(Transaction);