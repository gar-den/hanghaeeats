import mongoose, {Schema, model, mongo} from "mongoose";

const ReviewSchema: Schema = new Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
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