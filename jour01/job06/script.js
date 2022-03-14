function fizzbuzz() {
    for ( let nombre = 0; nombre < 151; nombre++) {
        if (nombre % 3 == 0 && nombre % 5 !== 0) {
            console.log(nombre,"Fizz");
        }
        else if (nombre % 5 == 0 && nombre % 3 !== 0) {
            console.log(nombre,"Buzz");
        }
        else if (nombre % 3 == 0 && nombre % 5 == 0) {
            console.log(nombre,"FizzBuzz");
        }
        else {
            console.log(nombre);
        }
    }
}

fizzbuzz();