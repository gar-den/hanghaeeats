import mongoose, { Schema, model, mongo } from 'mongoose';

const MenuSchema: Schema = new Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    require: true,
  },
  name: String,
  price: Number,
  image: String,
});

export default mongoose.model('Menus', MenuSchema);
