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

const getFamiliar = (id) => {
    return new Promise((resolve, reject) => {
        const familiar = familia.find(f => f.id === id)?.nombre;
        (familiar) ? resolve(familiar) : reject(`No existe familiar con id ${id}`);
    });
}

const getSueldo = (id) => {
    return new Promise((resolve, reject) => {
        const sueldo = sueldos.find(s => s.id === id)?.sueldo;
        (sueldo) ? resolve(sueldo) : reject(`No existe sueldo con id ${id}`);
    });
}

const id = 1;

// getFamiliar(id)
//     .then(familiar => console.log(familiar))
//     .catch(err => console.log(err));

// getSueldo(id)
//     .then(sueldo => console.log(sueldo))
//     .catch(err => console.log(err));


// getFamiliar(id)
//     .then(familiar => {
//         getSueldo(id)
//             .then(sueldo => {
//                 console.log('Familiar: ', familiar, 'Sueldo: ', sueldo);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

let nombre;

getFamiliar(id)
    .then(familiar => {
        nombre = familiar;
        return getSueldo(id)
    })
    .then(sueldo => console.log('Familiar: ', nombre, 'Sueldo: ', sueldo))
    .catch(err => console.log(err));