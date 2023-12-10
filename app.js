'use strict';

const axios = require('axios');
const qs = require('qs');

const BASE_URL = 'https://notify-api.line.me';
const PATH = '/api/notify';
const LINE_TOKEN = 'AuzHVZp1lGAdYhXhllsZeaLfHlRipO3EeIwCSzOTrGg';

let config = {
  baseURL: BASE_URL,
  url: PATH,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${LINE_TOKEN}`,
  },
  data: qs.stringify({
    message: '渡邊',
  }),
};

axios(config)
  .then((res) => {
    console.log(res.status);
  })
  .catch((error) => {
    console.log(error);
  });
