const { merge, from } = require('rxjs');
const { map } = require('rxjs/operators');

const evenNumbers = from([1, 3, 5, 7, 9, 11, 13]);
const oddNumbers = from([2, 4, 6, 8, 10, 12, 14]);

merge(evenNumbers, oddNumbers)
    .subscribe((x) => console.log(x));