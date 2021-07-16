import mongoose, {Schema, model, mongo} from "mongoose";

const UserSchema: Schema = new Schema({
    email: String,
    nickname: String,
    password: String,
    phone: String,
    like_array: Array,
    order_array: Array,
});

export default mongoose.model("Users", UserSchema);