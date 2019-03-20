const { from, of } = require('rxjs');
const emp = {
    "id": "0957abc7-fa3f-e411-8efb-009c02b0cb58",
    "nome": "PARQUE SERRA AZUL",
    "nomereduzido": "PARQUE SERRA AZUL",
    "tipo": 3,
    "endereco": {
        "idcidade": "6774b121-a4d9-dc11-abcf-001b7845b4a6",
        "nomecidade": "Sorocaba",
        "estado": "SP",
        "bairro": "CAGUAÇU"
    }
};

from([emp]).subscribe((x) => console.log(x));

