// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
import mongoose from 'mongoose';
const { Schema } = mongoose;

const dataSchema = new Schema({
    id: String,
    author: String,
    image_url: String,
    optimaze_url: String,
    thumb_url: String,
})

const Data = mongoose.model('Data', dataSchema, 'data');

export default Data;