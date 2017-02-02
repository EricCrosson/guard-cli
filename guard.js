const spawn = require('./spawn.js');

module.exports = function guard(test) {
    return new Promise(function(resolve, reject) {

        function loop(test, predicate) {
            if (typeof predicate === 'undefined') {
                predicate = false
            }

            if (!predicate) {
                spawn(test).then(code => {
                    predicate = code == 0;
                    if (predicate) {
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
