import mongoose, { Schema, model, mongo } from 'mongoose';

const CartSchema: Schema = new Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    require: true,
  },
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Menu',
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  price: Number,
  menuCount: Number,
});

export default mongoose.model('Carts', CartSchema);
