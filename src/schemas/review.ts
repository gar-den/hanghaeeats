import mongoose, { Schema, model, mongo } from "mongoose";

const ReviewSchema: Schema = new Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  menuIdList: Array,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  reviewDate: {
    type: Date,
  },
  content: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Reviews", ReviewSchema);
