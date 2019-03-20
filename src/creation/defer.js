const { defer, of, range } = require('rxjs');

const x = 2;

const ofOrRange = defer(function() {
    return x === 1 ? of(x) : range(1, 3);
});

ofOrRange.subscribe(x => console.log(x));