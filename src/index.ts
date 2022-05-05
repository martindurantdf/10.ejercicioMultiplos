/*
• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

let numero1: number = Number(prompt("Ingrese el primer número: "));
let numero2: number = Number(prompt("Ingrese el segundo número: "));

function esMultiplo(numero1: number, numero2: number): boolean {
  let resultado: boolean = false;
  if (numero1 % numero2 === 0) {
    resultado = true;
  }
  return resultado;
}

console.log("El resultado es: ", esMultiplo(numero1, numero2));
