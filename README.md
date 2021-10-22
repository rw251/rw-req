# rw-req

[![Build Status](https://travis-ci.org/rw251/rw-req.svg?branch=master)](https://travis-ci.org/rw251/rw-req)
[![Coverage Status](https://coveralls.io/repos/github/rw251/rw-req/badge.svg?branch=master)](https://coveralls.io/github/rw251/rw-req?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/rw251/rw-req/badge.svg)](https://snyk.io/test/github/rw251/rw-req)

Minimalistic node fetch/request module.

## Usage

script.js

```js
import { fetch } from 'rw-req';

// Make a request
fetch({}).then();
```

Automatically adds an element with id `rwp` to your `body`.