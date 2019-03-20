const { of, range, interval } = require('rxjs');
const { flatMap, take } = require('rxjs/operators');

of(1, 2, 3, 5).pipe(
    take(2),
    flatMap((x) => {
        console.log(`x: ${x}`);
        return interval(500).pipe(take(3))
    })
).subscribe(x => console.log(x))
