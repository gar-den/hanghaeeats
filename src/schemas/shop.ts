import mongoose, {Schema, model, mongo} from "mongoose";

const ShopSchema: Schema = new Schema({
    name: String,
    category: String,
    image: String,
    orders: Number,
    avgStar: String,
    countStar: Number
});

export default mongoose.model("Shops", ShopSchema);