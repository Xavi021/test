//se utiliza para corregir errores de java Script en tiempo de compilacion(programar aca para ejecutarlo en js)
//se usan metodos,types, class, (metodos y type son casi lo mismo).
type direccion = {
calle:string ;
altura:number ;
}

interface persona {
nombre:string ;
apellido:string ;
edad:Number ;
direccion?: direccion;

}


function mensaje (persona: persona)
{

console.log(`su nombre es ${persona.nombre} su apellido es ${persona.apellido} su edad es ${persona.edad}`);

}

mensaje({nombre: "xavier",apellido:"ceccotti",edad: 19});