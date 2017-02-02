const spawn = require('./spawn.js');

function guard(test) {
    return _guard(test, true);
}

function nguard(test) {
    return _guard(test, false);
}

/**
 * Execute `test` every second, until exit code is `normalGuard`.
 * (True == exit code 0)
 */
function _guard(test, normalGuard) {
    return new Promise(function(resolve, reject) {

        function loop(test, predicate) {
            if (typeof predicate === 'undefined') {
                predicate = !normalGuard;
            }

            if (predicate != normalGuard) {
                spawn(test).then(code => {
                    predicate = code == 0;
                    if (predicate && normalGuard) {
                        resolve();
                    } else {
                        spawn('sleep 1').then( code => {
                            loop(test, predicate);
                        }).catch(e => console.log(e));
                    }
                }).catch(e => console.log(e));
            }
        }

        loop(test);

    });

}

module.exports.guard = guard;
module.exports.nguard = nguard;
