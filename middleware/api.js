// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const verifyApi = (req, res, next) => {
    const auth = req.headers.authorization || req.headers.Authorization;
    if(!auth) {
        res.status(401).json({
            message: 'Unauthorized'
        });
        return;
    }

    const token = auth.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) {
                res.status(401).json({
                    message: 'Unauthorized'
                });
            } else {
                res.username = decoded.username;
                next();
            }
        }
    )
}

export default verifyApi;