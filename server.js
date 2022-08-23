// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const port = 3000
// const path = require('path');
// const index = require('./routes/index');
// const login = require('./routes/login');
// const art = require('./routes/api/art');
// const apiMiddleware = require('./middleware/api');

import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
const port = 3000
import 'dotenv/config'
import path from 'path'
import index from './routes/index.js'
import login from './routes/login.js'
import art from './routes/api/art.js'
import apiMiddleware from './middleware/api.js'
import { fileURLToPath } from 'url';

// const whitelist = ['https://google.com', 'http://localhost:3000', 'https://twitter.com', 'http:127.0.0.0:3000', 'http://127.0.0.1']
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cookieParser());
app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/login', login)

app.use(apiMiddleware);
app.use('/art', art)

mongoose.connection.on('connected', () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})
