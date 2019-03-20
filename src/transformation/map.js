const { from } = require('rxjs');
const { map } = require('rxjs/operators')
const empreendimento = require('../../entities/empreendimentos');

let obs = from([empreendimento]).pipe(map(emp => {
    console.log(emp);
    return emp.endereco;
}));

obs.subscribe(res => console.log(res));


