'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://semine:çsgbnvrweiujvberilerqg@database.yhitx.mongodb.net/semine?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;