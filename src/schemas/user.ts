import mongoose, {Schema, model, mongo} from "mongoose";

const UserSchema: Schema = new Schema({
    email: String,
    nickname: String,
    password: String,
    phone: String,
    like_array: {
        type: Array,
        default: []
    },
    order_array: {
        type: Array,
        default: []
    }
});

export default mongoose.model("Users", UserSchema);