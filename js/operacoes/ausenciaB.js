const ausenciaB = (a,c) => {

  let ausenciaBDiv = document.createElement("div");
  ausenciaBDiv.classList.add("ausenciaBDiv");

  let coeficientesParagrafo = document.createElement("p");
  let coeficientes = document.createTextNode('a = '+a+' / b = 0 / c = '+c);
  coeficientesParagrafo.appendChild(coeficientes);
  ausenciaBDiv.appendChild(coeficientesParagrafo);

  if (c > 0) {

    let erroParagrafo = document.createElement("span");
    erroParagrafo.classList.add("erro");
    let erroTexto = document.createTextNode("X não tem raízes reais");

    erroParagrafo.appendChild(erroTexto);
    ausenciaBDiv.appendChild(erroParagrafo);
    contas.appendChild(ausenciaBDiv);

    return "X não tem raízes reais";

  }
//-------------------------------------------------------
// linha da operação - parte 1
  let contaParagrafo1 = document.createElement("p");
  let contaNumeros1 = document.createTextNode(a+"X² "+c+" = 0");

  contaParagrafo1.appendChild(contaNumeros1);
  ausenciaBDiv.appendChild(contaParagrafo1);
//-------------------------------------------------------
// linha da operação - parte 2
  let contaParagrafo2 = document.createElement("p");
  let contaNumeros2 = document.createTextNode(a+"X² = "+ -(c));

  contaParagrafo2.appendChild(contaNumeros2);
  ausenciaBDiv.appendChild(contaParagrafo2);
//-------------------------------------------------------
// linha superior da operação - parte 3
  let contaParagrafo3_1 = document.createElement("p");
  let contaNumeros3_1 = document.createTextNode("X² = "+ -(c));

  contaParagrafo3_1.appendChild(contaNumeros3_1);
  ausenciaBDiv.appendChild(contaParagrafo3_1);
// linha inferior da operação - parte 3
  let contaParagrafo3_2 = document.createElement("p");
  let contaNumeros3_2 = document.createTextNode(a);

  contaParagrafo3_2.appendChild(contaNumeros3_2);
  ausenciaBDiv.appendChild(contaParagrafo3_2);
//-------------------------------------------------------
// linha da operação - parte 4
  let contaParagrafo4 = document.createElement("p");
  let contaNumeros4 = document.createTextNode("X² = "+ -(c) / a);

  contaParagrafo4.appendChild(contaNumeros4);
  ausenciaBDiv.appendChild(contaParagrafo4);
//-------------------------------------------------------
// linha da operação - parte 5
  let contaParagrafo5 = document.createElement("p");
  let contaNumeros5 = document.createTextNode("X = ± √"+ -(c) / a);

  contaParagrafo5.appendChild(contaNumeros5);
  ausenciaBDiv.appendChild(contaParagrafo5);
//-------------------------------------------------------
// linha da operação - parte 6 - x1
  let contaParagrafo6 = document.createElement("p");
  let contaNumeros6 = document.createTextNode("X1 = "+ Math.sqrt(-(c) / a));

  contaParagrafo6.appendChild(contaNumeros6);
  ausenciaBDiv.appendChild(contaParagrafo6);
//-------------------------------------------------------
// linha da operação - parte 7 - x2
  let contaParagrafo7 = document.createElement("p");
  let contaNumeros7 = document.createTextNode("X2 = "+ -(Math.sqrt(-(c) / a)));

  contaParagrafo7.appendChild(contaNumeros7);
  ausenciaBDiv.appendChild(contaParagrafo7);
//-------------------------------------------------------
  contas.appendChild(ausenciaBDiv);
    x1 = Math.sqrt(-(c)/a);
    x2 = -(Math.sqrt(-(c)/a));

    return x1+" "+x2;

}
