
  let linha1 = document.createElement("div");
  linha1.classList.add("linha1");const completa = (a,b,c) => {

//criando uma div para colocar a equação completa
  let equacaoCompleta = document.createElement("div");
  equacaoCompleta.classList.add("equacaoCompleta");
//definindo valores que serão usados para calcular e exibir a equação
  let valor1 = -(b);
  let delta = (b*b) - 4 * (a) * (c);
  let raizDelta = Math.sqrt(delta);
  let valor2 = 2* a;
//definindo x1 e x2
  x1 = ( (valor1 + raizDelta) / valor2);
  x2 = ( (valor1 - raizDelta) / valor2);
//linha com os coeficientes
  let coeficientesParagrafo = document.createElement("p");
  let coeficientes = document.createTextNode('a = '+a+' / b = '+b+' / c = '+c);
  coeficientesParagrafo.appendChild(coeficientes);
  equacaoCompleta.appendChild(coeficientesParagrafo);
// linha superior da operação - parte 1
  let linha1 = document.createElement("div");
  linha1.classList.add("linha1");

  let contaParagrafo1_1 = document.createElement("p");
  let contaNumeros1_1 = document.createTextNode("−("+b+") ± √("+b+")² −4 ✕ ("+a+") ✕ ("+c+")" );

  contaParagrafo1_1.appendChild(contaNumeros1_1);
  linha1.appendChild(contaParagrafo1_1);
  equacaoCompleta.appendChild(linha1);
//linha inferior da operação - parte 1
  let contaParagrafo1_2 = document.createElement("p");
  let contaNumeros1_2 = document.createTextNode("2 ✕ ("+a+")");

  contaParagrafo1_2.appendChild(contaNumeros1_2);
  linha1.appendChild(contaParagrafo1_2);

  equacaoCompleta.appendChild(linha1);
// ---------------------------------------------------
// linha superior da operação - parte 2
  let linha2 = document.createElement("div");
  linha2.classList.add("linha2");

  let contaParagrafo2_1 = document.createElement("p");
  let contaNumeros2_1 = document.createTextNode(valor1+ " ± √"+b*b+" −("+  4 * (a) * (c)+")");
  contaParagrafo2_1.appendChild(contaNumeros2_1);
  linha2.appendChild(contaParagrafo2_1);

// linha inferior da operação - parte 2
  let contaParagrafo2_2 = document.createElement("p");
  let contaNumeros2_2 = document.createTextNode(valor2);
  contaParagrafo2_2.appendChild(contaNumeros2_2);
  linha2.appendChild(contaParagrafo2_2);

  equacaoCompleta.appendChild(linha2);
// ----------------------------------------------------
// linha superior da operação - parte 3
  let linha3 = document.createElement("div");
  linha3.classList.add("linha3");

  let contaParagrafo3_1 = document.createElement("p");
  let contaNumeros3_1 = document.createTextNode(valor1+ " ± √"+ delta);
  contaParagrafo3_1.appendChild(contaNumeros3_1);
  linha3.appendChild(contaParagrafo3_1);

  let contaParagrafo3_2 = document.createElement("p");
  let contaNumeros3_2 = document.createTextNode(valor2);
// linha inferior da operação - parte 3
  contaParagrafo3_2.appendChild(contaNumeros3_2);
  linha3.appendChild(contaParagrafo3_2);
  equacaoCompleta.appendChild(linha3);
//-----------------------------------------------------
//verificando se o delta é negativo. caso delta seja negativo,
//a operação não exibirá mais nada
  if (delta < 0) {
    let erroParagrafo = document.createElement("span");
    erroParagrafo.classList.add("erro");
    let erroTexto = document.createTextNode("A equeção não tem raízes reais");
    erroParagrafo.appendChild(erroTexto);
    equacaoCompleta.appendChild(erroParagrafo);
    contas.appendChild(equacaoCompleta);
    return "A equeção não tem raízes reais";
  }
// ----------------------------------------------------
// linha superior da operação - parte 4
// início x1
  let linha4 = document.createElement("div");
  linha4.classList.add("linha4");

  let paragrafoX1_1_1 = document.createElement("p");
  let resultadoX1_1_1 = document.createTextNode("X1 = "+ valor1 + " + "+ raizDelta);

  paragrafoX1_1_1.appendChild(resultadoX1_1_1);
  linha4.appendChild(paragrafoX1_1_1);
// linha inferior da operação - parte 4
  let paragrafoX1_1_2 = document.createElement("p");
  let resultadoX1_1_2 = document.createTextNode(valor2);

  paragrafoX1_1_2.appendChild(resultadoX1_1_2);
  linha4.appendChild(paragrafoX1_1_2);
  equacaoCompleta.appendChild(linha4);
// ----------------------------------------------------
// linha superior da operação - parte 5
  let linha5 = document.createElement("div");
  linha5.classList.add("linha5");

  let paragrafoX1_3_1 = document.createElement("p");
  let resultadoX1_3_1 = document.createTextNode("X1 = " +
  (valor1 + raizDelta) );

  paragrafoX1_3_1.appendChild(resultadoX1_3_1);
  linha5.appendChild(paragrafoX1_3_1);
// linha inferior da operação - parte 5
  let paragrafoX1_3_2 = document.createElement("p");
  let resultadoX1_3_2 = document.createTextNode(valor2);

  paragrafoX1_3_2.appendChild(resultadoX1_3_2);
  linha5.appendChild(paragrafoX1_3_2);

  equacaoCompleta.appendChild(linha5);
// ----------------------------------------------------
// linha final X1 da operação - parte 6
// fim x1
  let linha6 = document.createElement("div");
  linha6.classList.add("linha6");

  let paragrafoX1_4 = document.createElement("p");
  let resultadoX1_4 = document.createTextNode("X1 = " + x1);

  paragrafoX1_4.appendChild(resultadoX1_4);

  linha6.appendChild(paragrafoX1_4);
  equacaoCompleta.appendChild(linha6);
// ----------------------------------------------------
// linha superior da operação - parte 7
// início x2
  let linha7 = document.createElement("div");
  linha7.classList.add("linha7");

  let paragrafoX2_1_1 = document.createElement("p");
  let resultadoX2_1_1 = document.createTextNode("X2 = "+ valor1 + " - "+ raizDelta);

  paragrafoX2_1_1.appendChild(resultadoX2_1_1);
  linha7.appendChild(paragrafoX2_1_1);
// linha inferior da operação - parte 7
  let paragrafoX2_1_2 = document.createElement("p");
  let resultadoX2_1_2 = document.createTextNode(valor2);

  paragrafoX2_1_2.appendChild(resultadoX2_1_2);
  linha7.appendChild(paragrafoX2_1_2);
  equacaoCompleta.appendChild(linha7);
// ----------------------------------------------------
// linha superior da operação - parte 8
  let linha8 = document.createElement("div");
  linha8.classList.add("linha8");

  let paragrafoX2_3_1 = document.createElement("p");
  let resultadoX2_3_1 = document.createTextNode("X2 = " +
  (valor1 - raizDelta) );

  paragrafoX2_3_1.appendChild(resultadoX2_3_1);
  linha8.appendChild(paragrafoX2_3_1);
// linha inferior da operação - parte 8
  let paragrafoX2_3_2 = document.createElement("p");
  let resultadoX2_3_2 = document.createTextNode(valor2);

  paragrafoX2_3_2.appendChild(resultadoX2_3_2);
  linha8.appendChild(paragrafoX2_3_2);

  equacaoCompleta.appendChild(linha8);
// ----------------------------------------------------
// linha final X2 da operação - parte 9
// fim x2
  let linha9 = document.createElement("div");
  linha9.classList.add("linha9");

  let paragrafoX2_4 = document.createElement("p");
  let resultadoX2_4 = document.createTextNode("X2 = " + x2);

  paragrafoX2_4.appendChild(resultadoX2_4);
  linha9.appendChild(paragrafoX2_4);
  equacaoCompleta.appendChild(linha9);
// -------------------------------------------------------
//exibindo o resultado
  contas.appendChild(equacaoCompleta);
  return x1+" "+x2;
}
