import User from "../models/user";

export const signup = async (req, res) => {
    const { email, name, password} = req.body
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const signin = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}