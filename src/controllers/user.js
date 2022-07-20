import User from "../models/user";

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findOne({ _id: id }).exec();
        if (!user) {
            return res.status(400).json({
                message: "Không tìm thấy user",
            });
        }
        console.log("user", user);
        user.password = undefined;
        req.profile = user;
        console.log("req.profile", req.profile);
        // next();
    } catch (error) {}
};
