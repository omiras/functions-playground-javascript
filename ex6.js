
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * ¿Conces el juego de mesa Catan? https://devir.es/catan-el-juego?srsltid=AfmBOopKAZ38tynV99VjnI6bJe9uzAldTZ_KLqmp5tvdTJAw_ho5PjXO
 * 
 * En este juego siempre hay que tirar dos dados de 6 y sumar sus resultados.
 * Escribe a continuación el código necesario para invocar la función "rollDice" dos veces, sumar los resultados de las dos tiradas y mostrar el resultado por la consola.
 */

// Tu código a partir de aquí

let dice1 = rollDice();
let dice2 = rollDice();

console.log("Valor dado 1: ", dice1);
console.log("Valor dado 2: ", dice2);
console.log("La suma de los dos dados ha sido: ", dice1 + dice2);

