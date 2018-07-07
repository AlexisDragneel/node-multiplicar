const {argv} = require('./config/yargs');
const colors = require('colors')

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch(commando){
    case 'listar':
    listarTabla(argv.base,argv.limite);
    break;

    case 'crear':
    crearArchivo(argv.base,argv.limite)
    .then(archvio => console.log(`Archivo creado: ${archvio}`))
    .catch(e => console.log(e));
    break;

    default:
        console.log('comando no reconozido');
}

