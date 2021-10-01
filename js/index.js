let letraA = document.getElementById('letraA');
let letraB = document.getElementById('letraB');
let letraC = document.getElementById('letraC');

let formularioEquacao = document.getElementById('formularioEquacao');

formularioEquacao.onsubmit = function (e) {
  e.preventDefault();
  calcularOperacaoSegundoGrau(letraA,letraB,letraC);
}

const calcularOperacaoSegundoGrau =
(letraA,letraB,letraC) => {

  let equacaoCompleta = document.createElement("div");
  equacaoCompleta.classList.add("equacaoCompleta");
  let a = letraA.value;
  let b = letraB.value;
  let c = letraC.value;

  let x1;
  let x2;

  if (a && b && c) {

    let valor1 = -(b);
    let delta = (b*b) - 4 * (a) * (c);
    let raizDelta = Math.sqrt(delta);
    let valor2 = 2* a;

    if (delta < 0) {
      let contaParagrafo = document.createElement("p");
      let contaResultado = document.createTextNode("A equeção não tem raízes reais");
      contaParagrafo.appendChild(contaResultado);
      equacaoCompleta.appendChild(contaParagrafo);
      return "A equeção não tem raízes reais";
    }

    x1 = ( -(b) +(Math.sqrt(delta))) / 2 * (a);
    x2 = ( -(b) -(Math.sqrt(delta))) / 2 * (a);
//linha com os coeficientes
    let coeficientesParagrafo = document.createElement("p");
    let coeficientes = document.createTextNode('a = '+a+' / b = '+b+' / c = '+c);
    coeficientesParagrafo.appendChild(coeficientes);
    equacaoCompleta.appendChild(coeficientesParagrafo);
// linha superior da operação - parte 1
    let contaParagrafo1_1 = document.createElement("p");
    let contaNumeros1_1 = document.createTextNode("−("+b+") ± √("+b+")² −4 ✕ ("+a+") ✕ ("+c+")" );
    contaParagrafo1_1.appendChild(contaNumeros1_1);
    equacaoCompleta.appendChild(contaParagrafo1_1);
//linha inferior da operação - parte 1
    let contaParagrafo1_2 = document.createElement("p");
    let contaNumeros1_2 = document.createTextNode("2 ✕ ("+a+")");
    contaParagrafo1_2.appendChild(contaNumeros1_2);
    equacaoCompleta.appendChild(contaParagrafo1_2);
// ---------------------------------------------------
// linha superior da operação - parte 2
    let contaParagrafo2_1 = document.createElement("p");
    let contaNumeros2_1 = document.createTextNode(valor1+ " ± √"+b*b+" −("+  4 * (a) * (c)+")");
    contaParagrafo2_1.appendChild(contaNumeros2_1);
    equacaoCompleta.appendChild(contaParagrafo2_1);

// linha inferior da operação - parte 2
    let contaParagrafo2_2 = document.createElement("p");
    let contaNumeros2_2 = document.createTextNode(valor2);
    contaParagrafo2_2.appendChild(contaNumeros2_2);
    equacaoCompleta.appendChild(contaParagrafo2_2);
// ----------------------------------------------------
// linha superior da operação - parte 3
    let contaParagrafo3_1 = document.createElement("p");
    let contaNumeros3_1 = document.createTextNode(valor1+ " ± √"+ delta);
    contaParagrafo3_1.appendChild(contaNumeros3_1);
    equacaoCompleta.appendChild(contaParagrafo3_1);

    let contaParagrafo3_2 = document.createElement("p");
    let contaNumeros3_2 = document.createTextNode(valor2);
// linha inferior da operação - parte 3
    contaParagrafo3_2.appendChild(contaNumeros3_2);
    equacaoCompleta.appendChild(contaParagrafo3_2);
// ----------------------------------------------------
// linha superior da operação - parte 4
// início x1
    let paragrafoX1_1_1 = document.createElement("p");
    let resultadoX1_1_1 = document.createTextNode("X1 = "+ valor1 + " + "+ raizDelta);
    paragrafoX1_1_1.appendChild(resultadoX1_1_1);
    equacaoCompleta.appendChild(paragrafoX1_1_1);
// linha inferior da operação - parte 4
    let paragrafoX1_1_2 = document.createElement("p");
    let resultadoX1_1_2 = document.createTextNode(valor2);

    paragrafoX1_1_2.appendChild(resultadoX1_1_2);
    equacaoCompleta.appendChild(paragrafoX1_1_2);
// ----------------------------------------------------
// linha superior da operação - parte 5
    let paragrafoX1_3_1 = document.createElement("p");
    let resultadoX1_3_1 = document.createTextNode("X1 = " +
    (valor1 + raizDelta) );
    paragrafoX1_3_1.appendChild(resultadoX1_3_1);
    equacaoCompleta.appendChild(paragrafoX1_3_1);
// linha inferior da operação - parte 5
    let paragrafoX1_3_2 = document.createElement("p");
    let resultadoX1_3_2 = document.createTextNode(valor2);
    paragrafoX1_3_2.appendChild(resultadoX1_3_2);
    equacaoCompleta.appendChild(paragrafoX1_3_2);
// ----------------------------------------------------
// linha final X1 da operação - parte 6
// fim x1
    let paragrafoX1_4 = document.createElement("p");
    let resultadoX1_4 = document.createTextNode("X1 = " +
    (valor1 - raizDelta) / valor2 );
    paragrafoX1_4.appendChild(resultadoX1_4);
    equacaoCompleta.appendChild(paragrafoX1_4);
// ----------------------------------------------------
// linha superior da operação - parte 7
// início x2
    let paragrafoX2_1_1 = document.createElement("p");
    let resultadoX2_1_1 = document.createTextNode("X2 = "+ valor1 + " - "+ raizDelta);
    paragrafoX2_1_1.appendChild(resultadoX2_1_1);
    equacaoCompleta.appendChild(paragrafoX2_1_1);
// linha inferior da operação - parte 7
    let paragrafoX2_1_2 = document.createElement("p");
    let resultadoX2_1_2 = document.createTextNode(valor2);

    paragrafoX2_1_2.appendChild(resultadoX2_1_2);
    equacaoCompleta.appendChild(paragrafoX2_1_2);
// ----------------------------------------------------
// linha superior da operação - parte 8
    let paragrafoX2_3_1 = document.createElement("p");
    let resultadoX2_3_1 = document.createTextNode("X2 = " +
    (valor1 - raizDelta) );
    paragrafoX2_3_1.appendChild(resultadoX2_3_1);
    equacaoCompleta.appendChild(paragrafoX2_3_1);
// linha inferior da operação - parte 8
    let paragrafoX2_3_2 = document.createElement("p");
    let resultadoX2_3_2 = document.createTextNode(valor2);
    paragrafoX2_3_2.appendChild(resultadoX2_3_2);
    equacaoCompleta.appendChild(paragrafoX2_3_2);
// ----------------------------------------------------
// linha final X2 da operação - parte 9
// fim x1
    let paragrafoX2_4 = document.createElement("p");
    let resultadoX2_4 = document.createTextNode("X2 = " +
    (valor1 - raizDelta) / valor2 );
    paragrafoX2_4.appendChild(resultadoX2_4);
    equacaoCompleta.appendChild(paragrafoX2_4);
// -------------------------------------------------------
    contas.appendChild(equacaoCompleta);
  return x1+" "+x2;
  } else if (a && b && !c) {

    x1 = 0;
    x2 = -(b/a);
    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;

  } else if (a && !b && c) {

    if (c > 0) {

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
