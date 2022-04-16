'use strict';

const router = require('./router');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const server = express();
server.use(cors());

server.use(router);

server.listen(process.env.PORT, () => { console.log(`Server is listening on port ${process.env.PORT}`); });