// const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.listarDB();
        console.log("================== Por Hacer ====================".green);
        listado.forEach(function (tarea) {
            console.log(`${tarea.descripcion} - completado: ${tarea.completado}`);
        });
        console.log("=================================================".green);

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) console.log("Tarea actualizada!".yellow);
        else console.log("No se pudo actualizar la tarea :(".red);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) console.log("Tarea eliminada!".yellow);
        else console.log("No se pudo borrar la tarea :(".red);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}

