function calcularModa(lista) {
  const listaCount = {};
  lista.map((el) => {
    if (listaCount[el]) {
      listaCount[el] += 1;
    } else {
      listaCount[el] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(
    (valorAcumulado, nuevoValor) => {
      return valorAcumulado[1] - nuevoValor[1];
    }
  );
  return listaArray.pop();
}
//Otra solucion

// function mode(list) {
//   return list
//     .sort(
//       (valueA, valueB) =>
//         list.filter((v) => v === valueA).length -
//         list.filter((v) => v === valueB).length
//     )
//     .pop();
// }

const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
console.log(calcularModa(lista));
