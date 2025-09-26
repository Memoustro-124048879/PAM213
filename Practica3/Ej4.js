function simularPeticionAPI(){
    return new Promise(resolve=>{
        setTimeout(() =>{
            resolve('Datos recibidos correctamente');
        }, 5000);
    });
}

async function obtenerDatos() {
    try{
        const respuesta = await simularPeticionAPI() ;

        console.log('Proceso terminado');
        console.log('Resultado de la petición:', respuesta);
        
    } catch(error){
        console.log('Ocurrio un error:', error.message);
    }
}

obtenerDatos();