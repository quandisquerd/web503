import expressJWT from 'express-jwt';

exports.checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        res.redirect('/');
    }
}

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    console.log(req.auth)
    console.log(req.profile);
    const user = req.profile._id == req.auth._id;
    if(!user){
        res.status(402).json({
            message: "Bạn không được phép truy cập"
        })
    }
}