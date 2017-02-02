const fs = require('fs');
const assert = require('assert');
const should = require('should');

const _ = require('lodash');
const guard = require('../guard.js').guard;
const spawn = require('../spawn.js');

const samples = 10;
const timeout = 10000;
const testPath = '/tmp/test.json'

function waitAndCreate(testFile) {
    const delay = Math.random() * timeout/1000;
    console.log("Sleeping for " + delay + " seconds")
    // fixme: put this in the `it` descriptor
    spawn(`sleep ${delay}s && touch ${testPath}`)
        .then()
        .catch(e => console.log(e))
}

_.times(samples, function() {

    describe('guard', function() {
        before(function() {
            if (fs.existsSync(testPath)) {
                fs.unlinkSync(testPath);
            }
        });
        it('should block until test is true', function(done) {
            waitAndCreate();
            // fixme: what is a useful return from `guard`? time
            // elapsed while waiting?
            guard(`test -e ${testPath}`)
                .then(function () {
                    done();
                })
                .catch(err => done(err));
        }).timeout(samples*timeout);
    })
}
       );
