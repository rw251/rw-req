const https = require('https');

exports.fetch = (options) =>
  new Promise((resolve, reject) => {
    if (!options.method) options.method = 'GET';
    if (!options.port) options.port = 443;
    if (options.data) options.method = 'POST';
    let response = '';
    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`);
      res.on('data', (d) => {
        response += d.toString();
        console.log(response);
      });
      res.on('end', () => resolve(options.type === 'txt' ? response : JSON.parse(response)));
    });

    req.on('error', (error) => reject(error));

    if (options.data) {
      req.write(options.data);
    }
    req.end();
  });
