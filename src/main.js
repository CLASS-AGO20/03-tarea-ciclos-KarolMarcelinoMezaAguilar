export default class App {

    // Función que reciba un numero y calcule la suma de una serie (for)

    sumatoriaSerieUno(numero){

        let resultado = 1;
        
        for(let i=2; i<=numero ; i=i+1){

            resultado = resultado + 1/i;

        }

        return resultado;

    }

    // Función que reciba un numero y calcule la suma de una serie (while)

}

let app = new App();

// F1

console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieUno(1));

// F


// F


// F


// F
