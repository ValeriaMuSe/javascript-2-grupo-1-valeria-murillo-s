// Ejercicios de práctica
// 1. Crear una función que reciba como parámetro un número y retorne una promesa 
// que resuelva si el número es par o impar.

function isEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("Este es un número par");
    } else {
      reject("Este es un número impar");
    }
  });
}

isEven(4)
.then((resultado) => {
  console.log(resultado); 
})
.catch((error) => {
  console.error(error);
});

// 2. Crear una función que reciba como parámetro un número y retorne una promesa 
// que resuelva si el número es primo o no.
function isPrime(numero) {
  return new Promise((resolve, reject) => {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        reject("El número no es primo");
      }
    }
    resolve("El número es primo");
  });
}


isPrime(100)
.then((resultado) => {
  console.log(resultado); 
})
.catch((error) => {
  console.error(error);
});