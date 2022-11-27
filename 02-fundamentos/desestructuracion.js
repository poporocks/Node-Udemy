const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(`getNombre: ${deadpool.getNombre()}`);

const {nombre, apellido, poder, edad = 0} = deadpool;
console.log(`const: ${nombre}, ${apellido}, ${poder}, ${edad}`);

function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
    console.log(`imprimeHeroe: ${nombre}, ${apellido}, ${poder}, ${edad}`);
}
imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
const [h1, h2, h3] = heroes;
console.log(`array: ${h1}, ${h2}, ${h3}`);

const [ , , h4] = heroes;
console.log(`array2: ${h4}`);