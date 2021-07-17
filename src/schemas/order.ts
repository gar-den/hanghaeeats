import mongoose, { Schema, model, mongo } from 'mongoose';

const OrderSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    require: true,
  },
  menus: Array,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  orderDate: Date,
  price: Number,
});

export default mongoose.model('Orders', OrderSchema);

