const { range } = require('rxjs');
const { flatMap } = require('rxjs/operators');

const obs = range(1, 3).pipe(flatMap((x) => {
    console.log(`x: ${x}`);
    return range(x, 5)
}));

obs.subscribe(x => console.log(x));