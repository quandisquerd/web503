import User from "../models/user";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = await User.create(req.body);

        return res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (error) {}
};
