const { range } = require('rxjs');


range(1, 5).subscribe({
    sum: 0,
    next(value) {
        console.log(value);
        this.sum += value;
    },
    complete() {
        console.log(`Soma: ${this.sum}`);
    }
});