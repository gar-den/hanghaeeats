import mongoose, { Schema, model, mongo } from "mongoose";

const StoreSchema: Schema = new Schema({
  name: String,
  category: String,
  image: String,
  orders: {
    type: Number,
    default: 0,
  },
  avgStar: {
    type: Number,
    default: 0,
  },
  countStar: {
    type: Number,
    default: 0,
  },
});

StoreSchema.index({ name: "text" });

export default mongoose.model("Stores", StoreSchema);


