// Según lo que leí el rango medio es muy utilizado a la hora del trading o las negociaciones, para sacar un número medio entre el punto mas alto y el mas bajo de la 'negocioacion'

const lista = [3, 4, 7, 8, 5, 6];

function ordenarLista(uLista) {
  return uLista.sort(function (a, b) {
    return a - b;
  });
}

function rangoMedio(arr) {
  ordenarLista(arr);
  let minVal = arr[0];
  let maxVal = arr.pop();
  let resultado = (minVal + maxVal) / 2;
  return resultado;
}

rangoMedio(lista);