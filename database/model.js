'use strict';

const mongoose = require('./connection');

const dataSchema = new mongoose.Schema({
  groundHumidity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

const Data = mongoose.model('data', dataSchema);
module.exports = Data;