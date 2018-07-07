const opts = {
    base:{
        demmand: true,
        alias:'b'
    },
    limite:{
        alias: 'l',
        default:10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
    .command('crear', 'Crea el archivo de la tbla solicitada',opts)
    .help()
    .argv;

module.exports = {
    argv
}