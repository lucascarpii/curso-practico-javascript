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

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function alturaTrianguloIsosceles(lado, lado2, base) {
  if (lado != lado2) {
    console.error("Los lados del triángulo no son iguales");
  } else {
      cat1 = (base / 2) * (base / 2);
      hip = lado * lado;
      altura = Math.sqrt(hip - cat1);
  }
}
