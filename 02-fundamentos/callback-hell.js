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
    const familiar = familia.find(f => f.id === id)?.nombre;
    
    if (familiar) {
        callback(null, familiar);
    }
    else {
        callback(`Familiar con id ${id} no existe.`);
    }
}

const getSueldo = (id, callback) => {
    const sueldo = sueldos.find(s => s.id === id)?.sueldo;
    
    if (sueldo) {
        callback(null, sueldo);
    }
    else {
        callback(`El sueldo con id ${id} no existe.`);
    }
}

const id = 4;

getFamiliar(id, (err, familiar) => {
    if(err) return console.log(`ERROR!! ${err}`);
    
    getSueldo(id, (err, sueldo) => {
        if(err) return console.log(`ERROR!! ${err}`);
        console.log('Familiar: ', familiar, 'Sueldo: ', sueldo);
    })
})