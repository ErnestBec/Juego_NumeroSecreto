let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Asertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es Menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es Mayor");
    }
    intentos++;
    limpiarCaja()
  }
  return;
}



function limpiarCaja(){
document.querySelector("#valorUsuario").value = "";

}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si ya sorteamos todos los numeros
if(listaNumerosSorteados.length  == numeroMaximo){
  asignarTextoElemento('p','Ya se sotearon todos los numero posibles')
}else{

  
  //Si el numero generado esta en la lista.
  
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego del número Secreto");
  asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos=1;

}

function reiniciarJuego(){
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //inicializar intentos
  condicionesIniciales();
  //Deshabilitar boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled', 'true')

}

//Recursividad



condicionesIniciales();

