let repetir = true
let contadorParesImpares = 0
let contadorFactorial = 0
let contadorValidacionContraseña = 0
let contadorMultiplicar = 0
let contadorAdivinarNumero = 0
let contadorSumaPrimosHastaN= 0
let contadorFibonacci = 0
let contadorTemperatura = 0
let contadorPotencia = 0
let contadorJugarPiedraPapelTijeras = 0

alert("Bienvenido/a al menú de ejercicios")



while(repetir){
    let opc = Number(prompt("Seleccione una de las siguientes opciones: \n1. Contador de numeros pares e impares. \n 2. Calculadora factorial \n 3. Validacion de contraseña\n 4. Generador de tablas de multiplicar\n 5. Adivina el numero.\n 6. Suma de numeros primos.\n 7. Secuencia de Fibonacci.\n 8. Convertidor de temperatura.\n 9. Calculadora de potencia\n 10. Juego de piedra, papel o tijeras\n 11. Salir"))
    switch(opc){
        case 1:
          let opcion = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcion == 1){
            alert("El ejercicio seleccionado tiene como funcionalidad contar los números pares e impares del número ingresado.")
          contarParesImpares()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorParesImpares++
        break
        case 2:
          let opcionUno = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionUno == 1){
            alert("El ejercicio seleccionado se trata de una calculadora factorial, la cual multiplica todos los números desde el 1 hasta el número ingresado.")
            factorial()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorFactorial++
        break
        case 3:
          let opcionDos = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionDos == 1){
            alert("El ejercicio seleccionado se trata de la validación de un contrseña registrada")
            validacionContraseña()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorValidacionContraseña++
        break
        case 4:
          let opcionTres = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionTres == 1){
            alert("El ejercicio seleccionado te pide un número y con ese número ingresado, te muestra la tabla de multiplicacion correspondiente.")
            let numero = Number(prompt('Ingrese el número de la tabla de multiplicar que desea ver'));
            TablaMultiplicar(numero);
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorMultiplicar++

        break
        case 5:
          let opcionCuatro = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionCuatro == 1){
            alert("Usted ha ingresado a un juego, se trata de adivinar un numero aleatorio del 1 al 100.")
            adivinarNumero()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorAdivinarNumero++

        break
        case 6:
          let opcionCinco = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionCinco == 1){
            alert("El ejercicio seleccionado suma los numeros primos desde el 1 hasta el numero que usted desee. ")
            sumaPrimosHastaN()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorSumaPrimosHastaN++

        break
        case 7:
          let opcionSeis = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionSeis == 1){
            alert("El ejercicio seleccionado hace una secuencia de fibonacci.");
            let terminoUsuario = Number(prompt("Ingrese un número para empezar la secuencia de Fibonacci:"));
            console.log(fibonacci(terminoUsuario));
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorFibonacci++

        break
        case 8:
          let opcionSiete = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionSiete == 1){
            alert("El ejercicio seleccionado convierte temperatura en grados celsius a Fahrenheit y los grados Fahrenheit a Celsius.")
            temperatura()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorTemperatura++

        break
        case 9:
          let opcionOcho = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionOcho == 1){
            alert("El ejercicio seleccionado te ayuda encontrar la potencia de cualquier número. ")
            potencia ()
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorPotencia++

        break
        case 10:
          let opcionNueve = Number(prompt("Digite: \n1. Continuar  \n2.Volver al menú. "))
          if (opcionNueve == 1){
            alert("Usted ha ingresado a un juego, se trata de juegar usted contra la computadora eligiendo entre piedra, papel o tijeras, el programa determina al ganador. \nBUENA SUERTE ")
            let eleccionUsuario = prompt("Elige piedra, papel o tijeras").toLowerCase();
            if (eleccionUsuario === "piedra" || eleccionUsuario === "papel" || eleccionUsuario === "tijeras") {
              jugarPiedraPapelTijeras(eleccionUsuario);
            } else {
              alert("Elige una opción válida. Por favor, elige: piedra, papel o tijeras.");
            }
           
            jugarPiedraPapelTijeras(eleccionUsuario)
       
        }else{
          alert("Ha vuelto al menú")  
        }
        contadorJugarPiedraPapelTijeras++

        break
        case 11:
        
        console.log("Se ha realizado la opción contador de números pares e impares: "+contadorParesImpares+" veces")
        console.log("Se ha realizado la opción calculadora factorial: "+contadorFactorial+" veces")
        console.log("Se ha realizado la opción validación de contraseña: "+contadorValidacionContraseña+" veces")
        console.log("Se ha realizado la opción generador de tablas de multiplicar: "+contadorMultiplicar+" veces")
        console.log("Se ha realizado la opción adivina el número: "+contadorAdivinarNumero+" veces")
        console.log("Se ha realizado la opción suma de números primos: "+contadorSumaPrimosHastaN+" veces")
        console.log("Se ha realizado la opción secuencia Fibonacci: "+contadorFibonacci+" veces")
        console.log("Se ha realizado la opción convertidor de temperatura: "+contadorTemperatura+" veces")
        console.log("Se ha realizado la opción calculadora de potencia: "+contadorPotencia+" veces")
        console.log("Se ha realizado la opción juego de piedra, papel o tijeras: "+contadorJugarPiedraPapelTijeras+" veces")

        Salir()

        break
        default:
            console.log("Ingrese un número valido ")
    }
}
//----------------------------Opción 1--------------------------------------------------------------------//

function contarParesImpares() {
 
  let numeroUsuario =   Number(prompt("Ingrese un número:"))

    let pares = 0
    let impares = 0

    for (let i = 1; i <= numeroUsuario; i++) {
      if (i % 2 == 0) {
        pares++
      } else {
        impares++
      }
    }
    console.log("El numero seleccionado es: "+numeroUsuario)
    console.log("Cantidad de números pares: "+pares)
    console.log("Cantidad de números impares: "+impares)
  }
//-----------------------------Opción 2-------------------------------------------------------------------//

function factorial(){
 
  let numeroFactorial = Number(prompt("Ingrese un número para calcular su factorial:"))
  let factorial = 1

  for (let i = 1; i <= numeroFactorial; i++) {
      factorial *= i
    }
    console.log("El factorial de "+numeroFactorial+" es: "+factorial)
  }
//----------------------------Opción 3------------------------------------------------------------------//

function validacionContraseña(){
  
  let contraseña = prompt("Ingrese la contraseña: ")
  if (contraseña == "secreto123"){
    alert("Acceso concedio.")
  }else{
    alert ("Contraseña no valida.")
  }

}
//-----------------------------Opción 4------------------------------------------------------------------//
             
function TablaMultiplicar(numero) {
  
  for (var i = 1; i <= 10; i++) {
    console.log('La tabla de multiplicar ingresada es ' + numero + ' * ' + i + ' = ' + (numero * i));
  }
}
//-----------------------------Opción 5-------------------------------------------------------------------//

function adivinarNumero(){
  
  let numeroAleatorio = Math.floor (Math.random()*100)
  let rep = true
  while(rep){
  let numeroUsua = Number(prompt("Ingrese un numero del 1 al 100: "))
  if(numeroUsua == numeroAleatorio){
    alert("Felicidades has acertado el numero! "+numeroAleatorio)
    rep=false
  }else if(numeroUsua > numeroAleatorio){
    alert("Mas abajo!")
  }else{
    alert("Más arriba!")
  }
}


}

//-------------------------------Opción 6----------------------------------------------------------------//

function sumaPrimosHastaN() {
 
  let N = Number(prompt("Ingrese el numero hasta el cual quiere que se sumen los numeros primos: "))
  let suma = 0;

  function esPrimo(num) {
      for(let i = 2; i < num; i+=num)
          if(num % i === 0) return false;
      return num > 1;
  }

  for(let i = 2; i <= N; i++) {
      if(esPrimo(i)) {
          suma += i;
      }
  }
  console.log(suma)
}


//-----------------------------------Opción 7---------------------------------------------------------------------//

function fibonacci(termino) {
  let secuencia = [];

  if (termino === 0) {
    return secuencia;
  } else if (termino === 1) {
    secuencia.push(0);
    return secuencia;
  } else if (termino === 2) {
    secuencia.push(0, 1);
    return secuencia;
  } else {
    secuencia.push(0, 1);

    for (let i = 2; i < termino; i++) {
      secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }

    return secuencia;
  }
}

//-----------------------------------Opción 8-------------------------------------------------------------//

function temperatura(){
  
let repeticiones = true
  
while(repeticiones){
// Pedir al usuario que elija la dirección de la conversión
    let opc = Number(prompt("Elija la conversión que desea hacer:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius \n3. Salir"));
 switch(opc){
    case 1:{
    // Convertir de Celsius a Fahrenheit
    let celsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));
      console.log( celsius + ' grados Celsius son equivalentes a ' + ((celsius * 9/5) + 32)+ ' grados Fahrenheit.');}
    break
    case 2:{
    // Convertir de Fahrenheit a Celsius
    let fahrenheit = Number(prompt("Ingrese la temperatura en grados Fahrenheit:"));
      console.log(fahrenheit + ' grados Fahrenheit son equivalentes a ' + ((fahrenheit - 32) * 5/9) + ' grados Celsius.');
  } break
    case 3:
    repeticiones = false
    break
    default:
        console.log("Ingrese una opcion valida ")
  }
}
}
//----------------------------------Opción 9-------------------------------------------------------------//

function potencia (){
  
  let numeroPotencia= Number(prompt("Ingrese el número de la base: "))
  let potenciaUsuario = Number(prompt("Ingrese el número del exponente: "))
  let resultado = numeroPotencia ** potenciaUsuario
  console.log("El resultado es: "+resultado)
}

//---------------------------------Opción 10--------------------------------------------------------------//

function jugarPiedraPapelTijeras(eleccionUsuario) {
  let elecciones = ["piedra", "papel", "tijeras"];
  let eleccionComputadora = Math.floor(Math.random() * 3);

 let resultados = ["¡Es un empate!", "¡Ganaste!", "¡La computadora ganó!"];
  let resultado = resultados[determinarGanador(eleccionUsuario, elecciones[eleccionComputadora])];

  alert("Elegiste: " + eleccionUsuario + "\nLa computadora eligió: " + elecciones[eleccionComputadora] + "\n" + resultado);
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
  if (eleccionUsuario === eleccionComputadora) {
    return 0; // Empate
  } else if (
    (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
    (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
  ) {
    return 1; // Gana el usuario
  } else {
    return 2; // Gana la computadora
  }
}



//---------------------------Opción 11-----------------------------------------------------------------//

function Salir(){
  repetir = false
  return repetir
}