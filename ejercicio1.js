// Ejercicio 1

var string = ("Hola desafio!! Qué facil es incluir 'comillas simples' y \"comillas dobles\" en este mensaje!");
alert(string)

// Ejercicio 2

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agostro', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for(i = 0; i < 12; i++){
    console.log(meses[i]);
}

// Ejercicio 3

window.onload = function() {
    // Numero de enlaces de la pagina
        var links = document.getElementsByTagName('a');
        console.log(links.length);
    // Direccion del penultimo enlace
        console.log(links[links.length-2].href);
    // Numero de enlaces que apuntan a http://prueba
        count = 0;
        for (i = 0; i < links.length; i++){
          if(links[i].href == "http://prueba/"){
            count++
          }
      }
      console.log(count);
      // Numero de enlaces del tercer p�rrafo
      var paraph = document.getElementsByTagName('p')[2];
      var link_paraph = paraph.getElementsByTagName('a');
      console.log(link_paraph.length);
  }
