let d;
let a;
let b = 2;
let c = -3;
let campoMestre = "1x² + 2x + 3 = 0";
const calcularOperacaoSegundoGrau = (a=null,b=null,c=null,d=null) => {
  let x1;
  let x2;

  let parte1;
  let raizDelta;
  let divisor;

  for (var i = 0; i <= campoMestre.length; i++) {

    if (campoMestre.substring(i-1,i) == "²") {
      console.log("a = "+campoMestre.substring(0,i-2));
    }
    if (campoMestre.substring(i-1,i) == "x" && campoMestre.substring(i,i+1) != "²") {
      console.log("b = "+campoMestre.substring(i-1,i-2));
    }

    if (campoMestre.substring(i-1,i) != "x" && campoMestre.substring(i,i+1) != "²" &&
    typeof campoMestre.substring(i-1,i) == "number" ) {
      console.log("c = "+campoMestre.substring(i-1,i-2));
    }
    
    console.log(campoMestre.substring(0,i) + " -> "+i);
  }
  if (a && b && c && !d) {
    parte1 = -(b);
    raizDelta = Math.sqrt((b*b) - 4 * (a) * (c));
    divisor = 2 * (a);
    x1 = (parte1 +(raizDelta)) / divisor;
    x2 = (parte1 -(raizDelta)) / divisor;

    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;
  } else if (a && b && !c && !d) {
    x1 = 0;
    x2 = -(b/a);
    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;
  } else if (a && !b && c && !d) {
    if ( c > 0) {
      x1 = null;
      x2 = null;
      console.log("a = "+a+" / b = "+b+" / c = "+c);
      return "É impossível calcular essa operação";
    } else {
      x1 = Math.sqrt(-(c)/a);
      x2 = -(Math.sqrt(-(c)/a));
      console.log("a = "+a+" / b = "+b+" / c = "+c);
      return x1+" "+x2;
    }
  } else if (!a && b && c && !d) {
    x1 = -(c/b);
    console.log("Você escreveu uma equação de 1º grau. Só tem um resultado a retornar");
    return x1;
  }
}

console.log(calcularOperacaoSegundoGrau(a,b,c,d));
