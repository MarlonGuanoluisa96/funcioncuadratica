
const formulario = document.getElementById("formRCalculo")
formulario.addEventListener("submit", function (event) {
    //Evitar recargar la pagina
    event.preventDefault();

    //Capturamos cada uno de los valores del formulario
    let a= Number(document.getElementById("a").value);
    let b= Number(document.getElementById("b").value);
    let c= Number(document.getElementById("c").value);
    var esPrimo;
    function esCalc(a,b,c) 
    {
        let dis =Math.pow(b,2)-(4*a*c); //calculamos discriminante

        //Comprobamos si es divisible
        if ((2*a) == 0) return "No es una ecuacion de 2do grado";

        // Comprobamos si tiene raices reales
        if (dis<0) return "No tiene raices reales";

        //Calculamos las raices
        let raiz1 = ((-b + dis)/(2*a))
        let raiz2 = ((-b - dis)/(2*a))
        return "Las raices son: x<sub>1</sub> =" + raiz1+  " y x<sub>2</sub> =" + raiz2;
    }
    console.log(esCalc(a,b,c))
    //mostrar el resultado en html
    let resultado = document.getElementById("resultado");
    resultado.innerHTML ="La ecuacion es " + a + "x<sup>2</sup> +" + b + "x +" + c +
                        "<br>" +  esCalc(a,b,c);

})