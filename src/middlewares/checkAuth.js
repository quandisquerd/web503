import expressJWT from "express-jwt";

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth", // req.auth
});
export const isAdmin = (req, res, next) => {
    console.log("req.profile", req.profile);
    console.log("req.auth", req.auth);
};
