//Ejercicio 1

var number = 100;

function reversenum() {
  var reverse = number.toString().split("").reverse().join("");
  console.log("Ejercicio 1= " + reverse);
}

reversenum();

//Ejercicio 2
var words = "hello world"

function uppercase() {
  const split = words.split(' ')
  const upperCase = split.map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  console.log("Ejercicio 2= " + upperCase)
}

uppercase();