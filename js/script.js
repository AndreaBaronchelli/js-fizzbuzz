/****************************************************
 * FizzBuzz
 ***************************************************/

/* Tasks
* 1 - ciclare i numeri da 1 a 100
* 2 - confrontare divisibilità
* 3 - output
*/

//1
var numero;
for(var i = 1; i < 101; i++) {
    numero = i;

    //2
    if( (numero % 3 === 0) && (numero % 5 === 0)) {
        numero = "FizzBuzz";
    } else if(numero % 3 === 0) {
        numero = "Fizz";
    } else if(numero % 5 === 0) {
        numero = "Buzz";
    }

    //3
    console.log(numero);
}