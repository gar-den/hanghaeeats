import mongoose, {Schema, model, mongo} from "mongoose";

const ReviewSchema: Schema = new Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        require: true,
    },
    menuIdList: Array,
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
    reviewDate: {
        type: Date,        
    },
    content: {
        type: String,
        require: true,
    },
    star:{
        type: Number,
        require: true,
    },
    
});

export default mongoose.model("Reviews", ReviewSchema);