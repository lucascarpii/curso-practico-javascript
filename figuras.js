//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd("Cuadrados");

//Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd("Triángulos");

// //Código circulo
console.group("Círculos");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");
// console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
  diametro = radio * 2;
  return diametro * PI;
}
// console.log("El perímetro del circulo es de: " + perimetroCirculo + "cm");
//Área
function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log("El área del circulo es: " + areaCirculo + "cm^2");
console.groupEnd("Círculos");
