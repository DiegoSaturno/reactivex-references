const { from } = require('rxjs');
const { find } = require('rxjs/operators');

const users = [ 
    { id: 1, tipo: 1, nome: 'Usuario 1' },
    { id: 2, tipo: 1, nome: 'Usuario 2' },
    { id: 3, tipo: 2, nome: 'Usuario 3' },
    { id: 554, tipo: 2, nome: 'Usuario 555'},
    { id: 554, tipo: 1, nome: 'Usuario 554' }    
];

from(users).pipe(
    find(u => u.id === 554)
).subscribe(x => console.log(x));