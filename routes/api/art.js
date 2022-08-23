// const express = require('express');
// const router = express.Router();
// const artController = require('../../controllers/artController');
import express from 'express';
import artController from '../../controllers/artController.js';
const router = express.Router();

router.route('/')
    .get(artController);

export default router;