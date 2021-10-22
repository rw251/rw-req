# rw-req

[![Coverage workflow](https://github.com/rw251/rw-req/actions/workflows/coverage.yml/badge.svg)](https://github.com/rw251/rw-req/actions/workflows/coverage.yml)
[![Coverage Status](https://coveralls.io/repos/github/rw251/rw-req/badge.svg?branch=main)](https://coveralls.io/github/rw251/rw-req?branch=main)
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
