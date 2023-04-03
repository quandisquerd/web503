export const uploadImage = async (req, res) => {
    const urls = req.files.map((file) => file.path);
    return res.json({ urls: urls });
};
