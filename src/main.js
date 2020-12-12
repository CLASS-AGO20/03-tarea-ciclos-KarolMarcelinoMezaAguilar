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

    sumatoriaSerieDos(numero){

        let i=2;
        let suma=1;
    
        while(i<=numero){

            if(i%2!==0){

                suma = suma -1/i;

            }else{

                suma = suma + 1/i;
            }
            
            i++;
        }
         
        return suma;

    }
    
    // Función que diga si un numero es primo o no (do)

    esPrimo(numero){
       
        let i=1
        let contador=0

        do{
            if(numero%i==0){

                contador++

            }else{
                
                
            }

            i++
            
        }while(i<=numero);

        if(contador>2){

            return false

        }else{

            return true
        }
    }

    // Función que regrese como string los multiplos de 3 de un rango (do)

    obtenerMultiplos(inicio, fin){

        let multres=""
        let i=inicio
        do{

            if(i%3==0){

                multres = multres + String(i)

            }else{


            }

            i++

        }while(i<=fin);

        return multres
    }

    //

}

let app = new App();

// F1

console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(3));
console.log(app.sumatoriaSerieUno(1));

// F2
console.log(app.sumatoriaSerieDos(5));
console.log(app.sumatoriaSerieDos(3));
console.log(app.sumatoriaSerieDos(1));


// F3
console.log(app.esPrimo(2));
console.log(app.esPrimo(11));
console.log(app.esPrimo(8));

// F4

console.log(app.obtenerMultiplos(1,7));
console.log(app.obtenerMultiplos(3,9));
console.log(app.obtenerMultiplos(8,10));

// F
