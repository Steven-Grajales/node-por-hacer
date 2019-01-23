const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new err('No se pudo grabar', err);
        console.log('Operacion guardada');
    })
}

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

const getListado = (completado) => {
    cargarDB();
    setear(completado);
    return listadoPorHacer;



}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let arregloNoBorrado = listadoPorHacer.filter(encontrado => encontrado.descripcion !== descripcion);
    if (arregloNoBorrado.length === listadoPorHacer.length) return false;
    else {
        listadoPorHacer = arregloNoBorrado;
        guardarDB();
        return true;
    }
}
const setear = (completado) => {
    let arregloNoBorrado = [];
    if (completado !== undefined) {
        arregloNoBorrado = listadoPorHacer.filter(encontrado => encontrado.completado = completado);
        listadoPorHacer = arregloNoBorrado;
        guardarDB();
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    setear
}