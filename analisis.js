//Utils
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
function esPar(num) {
  return num % 2 === 0;
}
function ordenarLista(uLista) {
  return uLista.sort(function (a, b) {
    return a - b;
  });
}
function calcularMediana(uLista) {
  const lista = ordenarLista(uLista);
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
  return mediana;
}
//Mediana General
const salariosArg = argentina.map((per) => {
  return per.salary;
});
console.log(salariosArg);
const salariosArgOrden = ordenarLista(salariosArg);
console.log(salariosArgOrden);
const medianaSalariosArg = calcularMediana(salariosArgOrden);

//Mediana del Top 10&
const spliceStart = (salariosArgOrden.length * 90) / 100;
const spliceCount = salariosArgOrden.length - spliceStart;

const salariosTop10Arg = salariosArgOrden.splice(spliceStart,spliceCount);
const medianaTop10Arg = calcularMediana(salariosTop10Arg)
console.log({ medianaSalariosArg, medianaTop10Arg });
