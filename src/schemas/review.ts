import mongoose, {Schema, model, mongo} from "mongoose";

const ReviewSchema: Schema = new Schema({
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
        require: true,
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        require: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        require: true,
    },
    content: String,
    star: String
});

export default mongoose.model("Reviews", ReviewSchema);