const { of } = require('rxjs');

let obs = of(1, 2, 3);

obs.subscribe(
    next = (val) => {
        console.log(val);
    },
    complete = () => {
        console.log("Complete");
    }
);

