import mongoose, { Schema, model, mongo } from "mongoose";

const MenuSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  name: String,
  price: Number,
  image: String,
});

export default mongoose.model("Menus", MenuSchema);
