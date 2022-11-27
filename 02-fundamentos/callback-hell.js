const familia = [
    {
        id: 1,
        nombre: 'Edgar'
    },
    {
        id: 2,
        nombre: 'Angeles'
    },
    {
        id: 3,
        nombre: 'Lilith'
    },
    {
        id: 4,
        nombre: 'Elliot'
    },
];

const sueldos = [
    {
        id: 1,
        sueldo: 20000
    },
    {
        id: 2,
        sueldo: 12000
    },
    {
        id: 3,
        sueldo: 8000
    }
];

const getFamiliar = (id, callback) => {
    const familiar = familia.find(f => f.id === id)
    
    if (familiar) {
        callback(null, familiar);
    }
    else {
        callback(`Familiar con id ${id} no existe.`);
    }
}

getFamiliar(7, (err, familiar) => {
    if(err) {
        console.log('ERROR!!');
        return console.log(err);
    }

    console.log('Familiar existe!');
    console.log(familiar);
})