#!/usr/bin/env node

'use strict';

const _ = require('lodash');

const guard = require('./guard.js');

function main(args) {
    const test = _.join(args, ' ');
    guard(test)
        .then()
        .catch(e => console.log(e));
}

let args = process.argv.slice(2);

if (process.argv.length > 2) {
    main(args);
}
