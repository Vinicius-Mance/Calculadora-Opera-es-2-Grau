
let letraA = document.getElementById('letraA');
let letraB = document.getElementById('letraB');
let letraC = document.getElementById('letraC');
let contas = document.getElementById('contas');

let formularioEquacao = document.getElementById('formularioEquacao');

formularioEquacao.onsubmit = function (e) {
  e.preventDefault();
  contas.innerHTML = calcularOperacaoSegundoGrau(letraA,letraB,letraC);
}

const calcularOperacaoSegundoGrau =
(letraA,letraB,letraC) => {

  let a = letraA.value;
  let b = letraB.value;
  let c = letraC.value;

  let x1;
  let x2;

  if (a && b && c) {

    let delta = (b*b) - 4 * (a) * (c);

    if (delta < 0) {
      return "A equeção não tem raízes reais";
    }

    x1 = ( -(b) +(Math.sqrt(delta))) / 2 * (a);
    x2 = ( -(b) -(Math.sqrt(delta))) / 2 * (a);

    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;

  } else if (a && b && !c) {

    x1 = 0;
    x2 = -(b/a);
    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;

  } else if (a && !b && c) {

    if ( c > 0) {

      console.log("a = "+a+" / b = "+b+" / c = "+c);
      return "É impossível calcular essa operação";

    } else {

      x1 = Math.sqrt(-(c)/a);
      x2 = -(Math.sqrt(-(c)/a));
      console.log("a = "+a+" / b = "+b+" / c = "+c);
      return x1+" "+x2;

    }

  } else if (!a && b && c) {
    x1 = -(c/b);
    console.log("Você escreveu uma equação de 1º grau. Só tem um resultado a retornar");
    return x1;
  }
}
