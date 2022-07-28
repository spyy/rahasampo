const gulp = require('gulp');
const axios = require("axios");

const config = require('./config/conf.json');

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    function: 'TIME_SERIES_DAILY',
    symbol: 'MSFT',
    outputsize: 'compact',
    datatype: 'json'
  },
  headers: {
    'X-RapidAPI-Key': config.xKey,
    'X-RapidAPI-Host': config.xHost
  }
};

function request(cb) {
  axios.request(options)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      cb();
    });
}

function result(cb) {
  console.log('jupii');
  
  cb();
}


function init(cb) {
  if (symbol) {
    cb();
  } else {
    cb(new Error('parameter missing'));
  }
}


//exports.kirjain = gulp.series(init, lastNames, result);

exports.request = gulp.series(request);
exports.result = gulp.series(result);


exports.default = gulp.series(init, result);
