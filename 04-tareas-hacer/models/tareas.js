const Tarea = require('./tarea');

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(opt = 0) {
        let i = 1;
        this.listadoArr.forEach(tarea => {
            if (opt == 0 || (opt == 1 && tarea.completadoEn) || (opt == 2 && !tarea.completadoEn)){
                console.log(`${(i + '.').green} ${tarea.desc} :: ${(tarea.completadoEn) ? tarea.completadoEn.green : 'Pendiente'.red}`)
                i++;
            }
        });
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)) this._listado[tarea.id].completadoEn = null
        });
    }
}

module.exports = Tareas;