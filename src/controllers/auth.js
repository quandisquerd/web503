import joi from "joi";
import bcrypt from "bcryptjs";

import User from "../models/user";
const signupSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required().messages({
        "string.email": "Email không đúng định dạng",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    password: joi.string().required().min(6).messages({
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "string.empty": "Password không được để trống",
        "any.required": "Trường Password là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "Password không khớp",
        "any.required": "Trường confirm password là bắt buộc",
    }),
});

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const { error } = signupSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }

        // kiểm tra tồn tại email

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        user.password = undefined;

        return res.status(201).json({
            message: "Đăng ký thành công",
            user,
        });
    } catch (error) {}
};
