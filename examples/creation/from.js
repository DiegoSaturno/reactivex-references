const { from } = require('rxjs');

const airplane = {
    name: "A340-600",
    manufacturer: "Airbus",
    engines: [
        {
            name: "Trent 560A2-61",
            manufacturer: "Rolls Royce"
        },
        {
            name: "Trent 560A2-61",
            manufacturer: "Rolls Royce"
        },
        {
            name: "Trent 560A2-61",
            manufacturer: "Rolls Royce"
        },
        {
            name: "Trent 560A2-61",
            manufacturer: "Rolls Royce"
        }
    ]
}

from([airplane]).subscribe((x) => console.log(x));

