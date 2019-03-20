const { map, filter, forkJoin, of, range, merge, concat } = require('rxjs');
const { mapTo } = require('rxjs/operators');
const empreendimento = require('../entities/empreendimentos');
const blocos = require('../entities/blocos');

let emp1 = {
    id: empreendimento.id,
    nome: empreendimento.nome
};

let emp2 = {
    tipo: empreendimento.tipo,
    nomereduzido: empreendimento.nomereduzido,
    endereco: empreendimento.endereco
};

const observable = merge([emp1, emp2]);

observable.subscribe((x) => console.log(x));


