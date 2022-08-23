import express from 'express'
import login from '../controllers/loginController.js'
const router = express.Router();
// const login = require('../controllers/loginController');

router.post('/', login)

export default router;