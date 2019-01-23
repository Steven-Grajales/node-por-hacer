const descripcion = {
    demand: true,
    alias: 'd'

}
const completado = {
    alias: 'c',
    default: false
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra todo un objeto por su descripcion', {
        descripcion
    })
    .command('listar', 'Pone los estados en el booleano que se desee', { estado: { default: undefined, alias: 'c' } })
    .help()
    .argv;

module.exports = {
    argv
}