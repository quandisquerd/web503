export const checkPermission = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!authHeader) {
        return res.status(401).json({
            message: "Bạn chưa đăng nhập",
        });
    }
};

// Kiểm tra req.headers.authorization có tồn tại hay không?
// Kiểm tra token có hợp lệ hay không?
// Dựa vào token để lấy payload, so sánh với id của user trong db
// Kiểm tra xem quyền của user có đủ để thực hiện hành động hay không?
// Nếu có thì next(), không thì trả về lỗi
