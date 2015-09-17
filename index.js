var urlParse = require('url').parse;
var geoip = require('geoip-lite');
var isUrl = require('is-url');
var dns = require('dns');

module.exports = function (url, callback) {
  var res = { url: url, addresses: {}, countries: [] };
  if (!url) {
    return callback(new Error('Empty url'), res);
  }
  if (!isUrl(url)) {
    return callback(new Error(url + ' is not a url'), res);
  }
  var parseUrl = urlParse(url);
  if (!parseUrl) {
    return callback(new Error('parse ' + url + ' empty'), res);
  }
  var hostname = parseUrl.hostname;
  if (!hostname) {
    res.hostname = hostname;
    return callback(new Error('Empty hostname'), res);
  }
  dns.resolve4(hostname, function (err, addresses) {
    if (err) {
      return callback(err, res);
    }
    addresses.forEach(function (addresse, index) {
      var geo = geoip.lookup(addresse);
      if (!geo || !geo.country) {
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