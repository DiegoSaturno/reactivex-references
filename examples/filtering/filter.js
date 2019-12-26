const { of } = require('rxjs');
const { filter, map } = require('rxjs/operators');

of(1, 1, 1, 3, 6, 7, 21, 30, 30, 45).pipe(
    filter(x => x === 1)
).subscribe(x => console.log(x));