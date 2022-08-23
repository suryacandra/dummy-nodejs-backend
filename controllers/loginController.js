import jwt from 'jsonwebtoken';
import Users from '../model/users.js';
import bcrypt from 'bcrypt';

// const jwt = require('jsonwebtoken');
// const Users = require('../model/users');
// const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        res.status(400).json({
            message: 'Please provide username and password'
        });
    }
    const findUser = await Users.findOne({ username }).exec();
    if(!findUser) {
        res.status(400).json({
            message: 'User not found'
        });
    }
    const isMatch = await bcrypt.compare(password, findUser.password);
    if(!isMatch) {
        res.status(400).json({
            message: 'Incorrect password'
        });
    } else {
        const accessToken = jwt.sign(
            {
                username: findUser.username
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '10s'
            }
        )

        const refreshToken = jwt.sign(
            {
                username: findUser.username
            },
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: '1d'
            }
        )

        findUser.refreshTokens = refreshToken
        const result = await findUser.save();

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 1000 * 60 * 60 * 24 });

        res.status(200).json({
            message: 'Login successful',
            token: accessToken
        });
    }
    
}

export default login;