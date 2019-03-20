const { interval } = require('rxjs');
const { map } = require('rxjs/operators');


interval(1000).pipe(map(() => 1)).subscribe(x => console.log(x));

