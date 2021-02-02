const argv=require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                    description: ' es la base a multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default: false,
                    description: 'Sirve para mostrar la tabla'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default: 10,
                    description: 'Sirve para saber cuantas veces se multiplica'
                })
                .check((argv,options)=>{
                    if (isNaN(argv.b)){
                        throw ' La base tiene que ser un numero'
                    }
                    else if(isNaN(argv.h)){
                        throw 'el limite de la multiplicacion debe ser numero'
                    }
                    return true
                    //console.log('yargs', argv)
                })
                .argv;

 module.exports=argv
