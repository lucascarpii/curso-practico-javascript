function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
const lista1 = [100, 200, 500, 400000000];
const mitadLista1 = parseInt(lista1.length / 2);

let mediana;

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (esPar(lista1.length)) {
  const el1 = lista1[mitadLista1];
  const el2 = lista1[mitadLista1 - 1];
  const promedioElementos = calcularMediaAritmetica([el1, el2]);

  mediana = promedioElementos;
} else {
  mediana = lista1[mitadLista1];
}
console.log(mediana);
