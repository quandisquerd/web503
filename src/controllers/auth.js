import User from "../models/user";
import bcrypt from "bcryptjs";
import joi from "joi";

const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": "Trường tên là bắt buộc",
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Mật khẩu không được để trống",
        "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
        "any.require": "Trường mật khẩu là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Xác nhận mật khẩu không được để trống",
        "any.only": "Xác nhận mật khẩu không khớp",
        "any.required": "Trường xác nhận mật khẩu là bắt buộc",
    }),
});

export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        console.log("error", error);

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        // Kiểm tra xem user đã đk chưa?
        const userExist = await User.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        // không trả về password
        user.password = undefined;

        return res.status(201).json({
            message: "Tạo tài khoản thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
