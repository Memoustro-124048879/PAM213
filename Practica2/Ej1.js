const persona ={
    nombre: 'Iván Isay',
    edad: 37,
    direccion:{
        ciudad:'Qro',
        pais:'MX'
    }
};


const{nombre,edad,direccion}= persona;
console.log('Me llamo '+nombre+', tengo '+edad+' y vivo en '+ direccion.ciudad);