const precioOriginal = 120;
const descuento = 18;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  console.log(
    "El precio original es: $" +
      precio +
      " y con el descuento aplicado queda en: $" +
      precioConDescuento
  );

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = Number(document.getElementById("InputPrice").value);
  const inputDiscount = Number(document.getElementById("InputDiscount").value);
  const parrafo = document.getElementById("finalPrice");
  const finalPrice = calcularPrecioConDescuento(inputPrice, inputDiscount);

  parrafo.innerText = "El precio con descuento es de $" + finalPrice;
}
