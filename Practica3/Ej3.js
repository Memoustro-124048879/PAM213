function verificarUsuario(admin){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const usuario='admin';

            if (usuario===admin){
                resolve('Acceso concedido');
            } else {
                reject('Acceso denegado');
            }

        }, 3000);
    });
};

verificarUsuario('admin')
.then(res=> console.log(res)) // Acceso concedido
.catch(err=> console.error(err));

verificarUsuario('Ivan')
.then(res=> console.log(res))
.catch(err=> console.error(err)); //Acceso denegado