//File System
const {crearArchivoTab}=require('./helpers/multiplicar');
const argv=require('./config/yargs');
const color=require('colors');

console.clear()
//console.log(process.argv)
console.log(argv)
console.log('base yargs ', argv.base)


// const[,,arg3='base=5']=process.argv
// const [,base=5]=arg3.split('=')


crearArchivoTab(argv.base,argv.listar,argv.h)
    .then(nombreArchivo=>console.log(color.rainbow(nombreArchivo),'creado'))
    .catch(err=>console.log(err))
    
