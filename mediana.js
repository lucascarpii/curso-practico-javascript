function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(uLista) {
  const lista = uLista.sort(function (a, b) {
    return a - b;
  });
  const mitadLista = parseInt(lista.length / 2);
  let mediana;

  if (lista.length == 0) {
    console.log("Tu lista esta vacia");
  } else {
    if (esPar(lista.length)) {
      const el1 = lista[mitadLista];
      const el2 = lista[mitadLista - 1];
      const promedioElementos = calcularMediaAritmetica([el1, el2]);

      mediana = promedioElementos;
    } else {
      mediana = lista[mitadLista];
    }
  }

  console.log(mediana);
  return mediana;
}

const lista1 = [100, 200, 500, 400000000];
calcularMediana(lista1);
