const { range } = require('rxjs');


const customObserver = {
    sum: 0,
    next(value) {
        this.sum += value;
    },
    complete() {
        console.log(`Soma: ${this.sum}`);
    }
};

range(1, 5).subscribe(customObserver);