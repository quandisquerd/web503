import mongoose, { Schema} from "mongoose";
import { createHmac} from 'crypto';
import { v4 as uuidv4 } from 'uuid';
const userSchema = new Schema({
    name: {
        type: String,
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
    encryptPassword(password){
        if(!password) return
        try {
            return createHmac("sha256", "abc").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save", function(next){
    this.password = this.encryptPassword(this.password)
    next();
});
export default mongoose.model('User', userSchema);