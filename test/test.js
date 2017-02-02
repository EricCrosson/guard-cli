var assert = require('assert');
var should = require('should');

const guard = require('../index.js').guard;

describe('guard', function() {
    xit('should block until test is true', function(done) {
        const startTime = (new Date).getTime();
        const expectedEnd = startTime + 1000;  // milliseconds
        guard('').then(elapsedTime => {
            elapsedTime.should.be.within(0, 15);
            done();
        }).catch(err => done(err));
    });
});
