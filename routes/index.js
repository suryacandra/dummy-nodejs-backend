// const express = require('express');
// const router = express.Router();
// const path = require('path');

import express from 'express';
import path from 'path';
const router = express.Router();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})

export default router;