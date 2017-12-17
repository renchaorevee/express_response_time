const request = require('request');

setInterval(() => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3000',
  };

  request(options, (e, r, b) => {
    console.log('%s, statusCode: %s', new Date(), r.statusCode);
  });
}, Math.random() * 60000);
