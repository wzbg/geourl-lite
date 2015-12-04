# geourl-lite

> Get a link's countries' code

## Install

```
$ npm install --save geourl-lite
```


## Usage

```js
var geourl = require('geourl-lite');

geourl('https://www.npmjs.com/package/geourl-lite', function (err, geo) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log(geo.url); //=> https://www.npmjs.com/package/geourl-lite
  console.log(geo.hostname); //=> www.npmjs.com
  console.log(geo.addresses); //=> { '103.245.222.162': 'AU' }
  console.log(geo.countries); //=> [ 'AU' ]
});
```


## Related

- [`dns`](https://millermedeiros.github.io/mdoc/examples/node_api/doc/dns.html) - Use require('dns') to access this module. All methods in the dns module use C-Ares except for dns.lookup which uses getaddrinfo(3) in a thread pool. C-Ares is much faster than getaddrinfo but the system resolver is more constant with how other programs operate. When a user does net.connect(80, 'google.com') or http.get({ host: 'google.com' }) the dns.lookup method is used. Users who need to do a large number of lookups quickly should use the methods that go through C-Ares.

- [`geoip-lite`](https://www.npmjs.com/package/geoip-lite) - A light weight native JavaScript implementation of GeoIP API from MaxMind.
- [`is-url`](https://www.npmjs.com/package/is-url) - Check whether a string is a URL.
- [`url`](https://www.npmjs.com/package/url) - The core url packaged standalone for use with Browserify.


## License

The MIT License (MIT)

Copyright (c) 2015 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.