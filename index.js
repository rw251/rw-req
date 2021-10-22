const https = require('https');

exports.fetch = (options) =>
  new Promise((resolve, reject) => {
    if (!options.method) options.method = 'GET';
    if (!options.port) options.port = 443;
    let response = '';
    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        response += d.toString();
      });
      res.on('end', () => resolve(options.type === 'txt' ? response : JSON.parse(response)));
    });

    req.on('error', (error) => reject(error));

    req.end();
  });
