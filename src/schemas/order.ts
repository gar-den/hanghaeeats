import mongoose, { Schema, model, mongo } from "mongoose";

const OrderSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stores",
    required: true,
  },
  menus: Array,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderDate: Date,
  price: Number,
  checkReview: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Orders", OrderSchema);
