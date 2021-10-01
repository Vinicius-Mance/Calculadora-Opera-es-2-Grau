const ausenciaB = (a,c) => {

  if (c > 0) {

    console.log("a = "+a+" / b = 0 / c = "+c);
    return "É impossível calcular essa operação";

  } else {

    x1 = Math.sqrt(-(c)/a);
    x2 = -(Math.sqrt(-(c)/a));
    console.log("a = "+a+" / b = "+b+" / c = "+c);
    return x1+" "+x2;

  }

}
