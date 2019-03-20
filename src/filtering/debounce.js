const { interval } = require('rxjs');
const { fromEvent, debounce } = require('rxjs/operators');

const clickEvent = fromEvent(document.getElementById('btn'), 'click');

clickEvent
    .pipe(debounce(() => interval(1000)))
    .subscribe(x => console.log(x));