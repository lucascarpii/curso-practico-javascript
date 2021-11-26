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
//Cuadrado
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
//Triángulo
function alturaTrianguloIsosceles(lado, lado2, base) {
  if (lado != lado2) {
    console.error("Los lados del triángulo no son iguales");
    alert("Hey! los lados del triángulo no son iguales");
  } else {
    cat1 = (base / 2) * (base / 2);
    hip = lado * lado;
    altura = Math.sqrt(hip - cat1);
    return altura;
  }
}

function calcularPerimetroTriangulo() {
  const lado1 = Number(document.getElementById("Lado1Triangulo").value);
  const lado2 = Number(document.getElementById("Lado2Triangulo").value);
  const base = Number(document.getElementById("BaseTriangulo").value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const lado1 = Number(document.getElementById("Lado1Triangulo").value);
  const lado2 = Number(document.getElementById("Lado2Triangulo").value);
  const base = Number(document.getElementById("BaseTriangulo").value);
  const altura = alturaTrianguloIsosceles(lado1, lado2, base);

  const area = areaTriangulo(base, altura);
  alert(area);
}

//Círculo
function calcularPerimetroCirculo() {
  const radio = Number(document.getElementById("InputCirculo").value);
  console.log(radio)
  const circ = perimetroCirculo(radio);
  alert(circ);
}

function calcularAreaCirculo() {
  const radio = Number(document.getElementById("InputCirculo").value);
  const area = areaCirculo(radio);
  alert(area);
}
