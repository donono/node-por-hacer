const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


//no es necesario la exportación debido a que este metodo se implementa dentro del metodo crear.
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puso grabar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");

    } catch (error) {
        listadoPorHacer = [];
    }

}

const listarDB = () => {

    let lista = require("../db/data.json");
    return lista;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else return false;
}


const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    else return false;

    // otra forma de hacerlo 
    // let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     guardarDB();
    //     return true;
    // }
}
module.exports = {
    crear,
    listarDB,
    actualizar,
    borrar
}