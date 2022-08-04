
// 1 piedra, 2 papel, 3 tijeras 
let jugador = 0;
let pc = 2;
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 papel tijera");

if( jugador == 1){
  alert("elegiste piedra ");
}
else if(jugador == 2 ){
    alert("elegiste papel ")
}else if (jugador == 3 ) {
    alert("elegiste tijera") 
}else{
    alert("INCORRECTO")
}
