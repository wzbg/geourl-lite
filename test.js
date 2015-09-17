var geourl = require('./index');

var url = 'https://www.npmjs.com/package/geourl-lite';

geourl(url, function (err, geo) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log('url:', geo.url);
  console.log('hostname:', geo.hostname);
  console.log('addresses:', geo.addresses);
  console.log('countries:', geo.countries);
});