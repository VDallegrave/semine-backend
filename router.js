'use strict';

const Data = require('./database/model');
const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
  response.status(200);
  return response.send('Server is running');
});

router.get('/data', async (request, response) => {
  response.status(200);
  const data = await Data.find({});
  const humidityMedian = data.reduce((accumulator, now) => {
    return accumulator + now.groundHumidity;
  }, 0) / data.length;
  const temperatureMedian = 28.9;
  return response.json({
    humidity: parseFloat(humidityMedian).toFixed(2),
    temperature: parseFloat(temperatureMedian).toFixed(2),
    lengthOfData: data.length
  });
});

module.exports = router;