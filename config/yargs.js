const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const filtradoCompletado = {
    alias: 'c',
    type: Boolean,
    default: false,
    desc: 'Filtra el listado'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Elimina una tarea según descripción ingresada', {
        descripcion
    })
    .command('listar', 'Lista las tareas registradas', {
        filtradoCompletado
    })
    .help()
    .argv;

module.exports = {
    argv
}