var urlParse = require('url').parse;
var geoip = require('geoip-lite');
var isUrl = require('is-url');
var dns = require('dns');

module.exports = function (url, callback) {
  if (!url) {
    return callback(new Error('Empty url'));
  }
  if (!isUrl(url)) {
    return callback(new Error(url + ' is not a url'));
  }
  var parseUrl = urlParse(url);
  if (!parseUrl) {
    return callback(new Error('parse ' + url + ' empty'));
  }
  var hostname = parseUrl.hostname;
  if (!hostname) {
    return callback(new Error('Empty hostname'));
  }
  dns.resolve4(hostname, function (err, addresses) {
    if (err) {
      return callback(err);
    }
    var res = { url: url, hostname: hostname, addresses: {}, countries: [] };
    addresses.forEach(function (addresse, index) {
      var geo = geoip.lookup(addresse);
      if (!geo) {
        geo.addresses.addresse = '';
        return;
      }
      res.addresses[addresse] = geo.country;
      if (res.countries.indexOf(geo.country) == -1) {
        res.countries.push(geo.country);
      }
    });
    callback(null, res);
  });
};