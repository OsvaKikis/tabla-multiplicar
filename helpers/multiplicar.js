const fs=require('fs');
const color=require('colors');

color.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

const crearArchivoTab=async(tabla=5,listar,hasta=10)=>{
    try {
        let salida=''
        let consola=''
        for(let i=1;i<=hasta;i++){
            consola+=`${tabla} ${'X'.warn} ${i}= ${color.error(tabla*i)}\n`
            salida+=`${tabla} X ${i}= ${tabla*i}\n`
        }
        if(listar){
            console.log(consola)
        }
        
        // fs.writeFile(`tabla-${tabla}.txt`,salida,(err)=>{
        //     if (err) throw err;
        //     console.log('the file has been saved')
        // })
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`,salida)
        return(`tabla-${tabla}.txt `)
        
    } catch (error) {
        throw error
    }
    
}

module.exports={
   //crearArchivoTab: crearArchivoTab
   crearArchivoTab
}