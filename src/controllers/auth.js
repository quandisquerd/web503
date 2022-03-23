import User from '../models/user';

export const signup = async (req, res) => {
    const { name, email, password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "email da ton tai"
            })
        };
        const user = new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    
}