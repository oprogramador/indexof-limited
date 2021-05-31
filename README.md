# indexof-limited

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/indexof-limited.svg?branch=master)](https://travis-ci.com/oprogramador/indexof-limited
)

[![NPM status](https://nodei.co/npm/indexof-limited.png?downloads=true&stars=true)](https://npmjs.org/package/indexof-limited
)

JavaScript library to find the first occurence of a substring inside a long string limited to initial and end position.
It works in the same way as `String.prototype.indexOf` when no end limit specified. Otherwise it searches only until the end limit (the entire substring must be within the limit).

## install
`npm install --save indexof-limited`

## usage
```js
const indexOf = require('indexof-limited');

const longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
const substring = 'consectetur';

expect(indexOf(longtext, substring, 10, 15)).to.equal(-1);
```
