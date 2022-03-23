import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true});

userSchema.methods = {
    encrytPassword(password){
        if(!password) return;
        return createHmac('sha256', '123456').update(password).digest('hex');
    }
}
userSchema.pre("save", function save(next) {
    try {
        this.password = this.encrytPassword(this.password);
        next();
    } catch (error) {
        console.log(error);
    }
});
export default mongoose.model("User", userSchema);