let letraA = document.getElementById('letraA');
let letraB = document.getElementById('letraB');
let letraC = document.getElementById('letraC');

let formularioEquacao = document.getElementById('formularioEquacao');

document.body.onload = function () {
  calcularOperacaoSegundoGrau(letraA,letraB,letraC);
}

formularioEquacao.onsubmit = function (e) {
  e.preventDefault();
  calcularOperacaoSegundoGrau(letraA,letraB,letraC);
}

const calcularOperacaoSegundoGrau =
(letraA,letraB,letraC) => {

  contas.innerHTML="";
  let a = letraA.value;
  let b = letraB.value;
  let c = letraC.value;

  let x1;
  let x2;

  if (a && b && c) {

    completa(a,b,c);

  } else if (a && b && c==0) {

    ausenciaC(a,b);

  } else if (a && b==0 && c) {

    ausenciaB(a,c);

  } else if (a==0 && b && c) {

    ausenciaA(b,c);

  }
}
