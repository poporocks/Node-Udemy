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

const getInfoFamiliar = async(id) => {
    try{
        const familiar = await getFamiliar(id)
        const sueldo = await getSueldo(id)
    
        return `El sueldo del familiar: ${familiar} es de $${sueldo}.`;
    } catch (error) {
        throw error;
    }
}

const id = 4;
getInfoFamiliar(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));