const { from } = require('rxjs');
const { groupBy, reduce, map, flatMap } = require('rxjs/operators');

const users = [ 
    { id: 1, tipo: 1, nome: 'Usuario 1' },
    { id: 2, tipo: 1, nome: 'Usuario 2' },
    { id: 3, tipo: 2, nome: 'Usuario 3' },
    { id: 554, tipo: 1, nome: 'Usuario 554' }
];

from(users).pipe(
    groupBy(u => u.tipo),
    flatMap((group) => group.pipe(
        reduce((acc, cur) => {
            return [...acc, cur]
        }, ["" + group.key]))
    ),
    map(arr => {
        return {'key': parseInt(arr[0]), 'values': arr.slice(1) }
    }),
).subscribe(res => console.log(res));

