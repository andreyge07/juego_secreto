 let numeroSecreto=0;
let intentos;
let numerosSorteados=[];
let numeroMaximo=10;



function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById(`valorUsuario`).value);
  //  console.log(numeroSecreto);
   // console.log(typeof(numeroUsuario));
   // console.log(typeof(numeroSecreto));
   // console.log(numeroUsuario);
   // console.log(numeroUsuario==numeroSecreto);
  
   console.log(`Numero de intentos ${intentos}`)
   if(numeroUsuario===numeroSecreto){
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos===1)?`vez`:`veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);

    } else {
        //usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento(`p`,`Intenta con un número menor`);

        } else{asignarTextoElemento(`p`,`Intenta con un número mayor`);}
        intentos++;
        limpiarCaja();
    }
    return;

}
function generarNumeroSecreto() {
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(numerosSorteados);
   //si ya se generaron todos los números
   if(numerosSorteados.length==numeroMaximo){
 asignarTextoElemento(`p`,`Ya se sortearon todos los números`);
   } else {
   // si el número está incluido en la lista 
   if(numerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
   } 
   else{
    numerosSorteados.push(numeroGenerado);

    return numeroGenerado;
   }
}

    
    
}
function limpiarCaja(){
     document.querySelector(`#valorUsuario`).value=``;
    // una alternativa es  let valorCaja=document.querySelector(`#valorUsuario`);
     //valorCaja.value=``;
}
function condicionesIniciales(){
    asignarTextoElemento(`h1`,`Juego del número secreto`);
asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto=generarNumeroSecreto();
intentos=1;

}
function reiniciarJuego () 
{ // limpiar caja
    limpiarCaja();
    //  indicar mensaje de intervalo de número
    condicionesIniciales();

    // generar el número aleatorio
   

    // deshabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,true);
    
    //inicializar el número de intentos
 

    
}
condicionesIniciales();