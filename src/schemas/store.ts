import mongoose, {Schema, model, mongo} from "mongoose";

const StoreSchema: Schema = new Schema({
    name: String,
    category: String,
    image: String,
    orders: {
        type: Number,
        default: 0
    },
    avgStar: {
        type: String,
        default: "0"
    },
    countStar: {
        type: Number,
        default: 0
    },
});

export default mongoose.model("Stores", StoreSchema);