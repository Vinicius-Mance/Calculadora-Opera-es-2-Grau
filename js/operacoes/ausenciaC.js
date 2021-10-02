const ausenciaC = (a,b) => {
  x1 = 0;
  x2 = -(b/a);

  let ausenciaCDiv = document.createElement("div");
  ausenciaCDiv.classList.add("ausenciaCDiv");

  let coeficientesParagrafo = document.createElement("p");
  let coeficientes = document.createTextNode('a = '+a+' / b = '+b+' / c = 0');
  coeficientesParagrafo.appendChild(coeficientes);
  ausenciaCDiv.appendChild(coeficientesParagrafo);
//-----------------------------------------------
// linha da operação - parte 1
  let contaParagrafo1 = document.createElement("p");
  let contaNumeros1 = document.createTextNode(a+"X² +("+b+"X) = 0");

  contaParagrafo1.appendChild(contaNumeros1);
  ausenciaCDiv.appendChild(contaParagrafo1);
//----------------------------------------------
// linha da operação - parte 2
  let contaParagrafo2 = document.createElement("p");
  let contaNumeros2 = document.createTextNode("X("+a+"X "+b+") = 0");

  contaParagrafo2.appendChild(contaNumeros2);
  ausenciaCDiv.appendChild(contaParagrafo2);
//----------------------------------------------
// linha da operação - parte 3
  let contaParagrafo3 = document.createElement("p");
  let contaNumeros3 = document.createTextNode("X1 = 0");

  contaParagrafo3.appendChild(contaNumeros3);
  ausenciaCDiv.appendChild(contaParagrafo3);
//----------------------------------------------
// linha da operação - parte 4
  let contaParagrafo4 = document.createElement("p");
  let contaNumeros4 = document.createTextNode(a+"X "+b+" = 0");

  contaParagrafo4.appendChild(contaNumeros4);
  ausenciaCDiv.appendChild(contaParagrafo4);

//----------------------------------------------
// linha da operação - parte 5
  let contaParagrafo5 = document.createElement("p");
  let contaNumeros5 = document.createTextNode(a+"X = "+ -(b) );

  contaParagrafo5.appendChild(contaNumeros5);
  ausenciaCDiv.appendChild(contaParagrafo5);
//----------------------------------------------
// linha superior da operação - parte 6
  let contaParagrafo6_1 = document.createElement("p");
  let contaNumeros6_1 = document.createTextNode("X = "+ -(b) );

  contaParagrafo6_1.appendChild(contaNumeros6_1);
  ausenciaCDiv.appendChild(contaParagrafo6_1);
// linha inferior da operação - parte 6
  let contaParagrafo6_2 = document.createElement("p");
  let contaNumeros6_2 = document.createTextNode(a);

  contaParagrafo6_2.appendChild(contaNumeros6_2);
  ausenciaCDiv.appendChild(contaParagrafo6_2);
//----------------------------------------------
// linha da operação - parte 7
  let contaParagrafo7 = document.createElement("p");
  let contaNumeros7 = document.createTextNode("X2 = "+ -(b) / a );

  contaParagrafo7.appendChild(contaNumeros7);
  ausenciaCDiv.appendChild(contaParagrafo7);
  contas.appendChild(ausenciaCDiv);
  return x1+" "+x2;
}
