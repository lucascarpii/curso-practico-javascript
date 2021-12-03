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
