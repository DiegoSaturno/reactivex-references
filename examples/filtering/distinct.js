const { of } = require('rxjs');
const { distinct, map } = require('rxjs/operators');

of(1, 1, 1, 3, 6, 6, 7, 21, 30, 30, 45).pipe(
    distinct()
).subscribe(x => console.log(x));