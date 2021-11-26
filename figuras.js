//Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd("Cuadrados");

//Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd("Triángulos");

// //Código circulo
console.group("Círculos");
const PI = Math.PI;
//Circunferencia
function perimetroCirculo(radio) {
  diametro = radio * 2;
  return diametro * PI;
}
//Área
function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd("Círculos");
