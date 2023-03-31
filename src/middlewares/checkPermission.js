import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                message: "Bạn chưa đăng nhập",
            });
        }
        // Bearer xxx ->
        const token = req.headers.authorization.split(" ")[1]; // ["bearer", "xxx"]
        console.log("token", token);
        jwt.verify(token, "banThayDat", async (error, payload) => {
            console.log("error", error);
            if (error) {
                if (error.name == "TokenExpiredError") {
                    return res.json({
                        message: "Token không hợp lệ",
                    });
                }
                if (error.name == "TokenExpiredError") {
                    return res.json({
                        message: "Token hết hạn",
                    });
                }
            }
            const user = await User.findById(payload.id);
            console.log(user);
            if (!user && user.role !== "admin") {
                return res.status(403).json({
                    message: "Bạn không có quyền truy cập tài nguyên, cút!",
                });
            }
            next();
        });
    } catch (error) {
        return res.status(401).json({
            message: error.message || "Token không hợp lệ",
        });
    }
};

// B1: Kiểm tra xem user đã đăng nhập chưa?
// B2: Kiểm xem token có đúng hay không?
// B3: Giải mã token và tìm user trong db dựa theo id
// B4: Kiểm tra user đấy có phải là admin không? nếu không phải cút
// B5: Cho phép đi tiếp
