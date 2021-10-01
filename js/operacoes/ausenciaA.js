const ausenciaA = (b,c) => {
  x = -(c/b);
//criando a div responsável pela exibição
  let ausenciaADiv = document.createElement("div");
  ausenciaADiv.classList.add("ausenciaADiv");

//exibição dos coeficientes
  let coeficientesParagrafo = document.createElement("p");
  let coeficientes = document.createTextNode('a = 0 / b = '+b+' / c = '+c);

  coeficientesParagrafo.appendChild(coeficientes);
  ausenciaADiv.appendChild(coeficientesParagrafo);

//mensagem de notificação/erro sobre a equação
  let erroParagrafo = document.createElement("span");
  erroParagrafo.classList.add("erro");
  let erroTexto = document.createTextNode("Você escreveu uma equação de 1º grau. Só tem um resultado a retornar");

  erroParagrafo.appendChild(erroTexto);
  ausenciaADiv.appendChild(erroParagrafo);
//-----------------------------------------------
//linha da operação - parte 1
    let paragrafoX_1 = document.createElement("p");
    let resultadoX_1 = document.createTextNode(b+"X + ("+ (c)+") = 0");

    paragrafoX_1.appendChild(resultadoX_1);
    ausenciaADiv.appendChild(paragrafoX_1);
//--------------------------------------------------
//linha da operação - parte 2
    let paragrafoX_2 = document.createElement("p");
    let resultadoX_2 = document.createTextNode(b+"X = " + (-(c)));

    paragrafoX_2.appendChild(resultadoX_2);
    ausenciaADiv.appendChild(paragrafoX_2);
//--------------------------------------------------
//linha superior da operação - parte 3
    let paragrafoX_3_1 = document.createElement("p");
    let resultadoX_3_1 = document.createTextNode("X = " + (-(c)));

    paragrafoX_3_1.appendChild(resultadoX_3_1);
    ausenciaADiv.appendChild(paragrafoX_3_1);
//linha inferior da operação - parte 3
  let paragrafoX_3_2 = document.createElement("p");
  let resultadoX_3_2 = document.createTextNode(b);

  paragrafoX_3_2.appendChild(resultadoX_3_2);
  ausenciaADiv.appendChild(paragrafoX_3_2);
//--------------------------------------------------
//linha da operação - parte 4
    let paragrafoX_4 = document.createElement("p");
    let resultadoX_4 = document.createTextNode("X = " + x);

    paragrafoX_4.appendChild(resultadoX_4);
    ausenciaADiv.appendChild(paragrafoX_4);
//--------------------------------------------------
//exibindo o resultado
  contas.appendChild(ausenciaADiv);
  return x;
}
