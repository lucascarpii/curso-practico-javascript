// const precioOriginal = 120;
// const descuento = 18;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento, cupon) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  // console.log(
  //   "El precio original es: $" +
  //     precio +
  //     " y con el descuento aplicado queda en: $" +
  //     precioConDescuento
  // );

  return precioConDescuento;
}

const coupons = [
  {
    name: "blackfRID4Y",
    discount: 15,
  },
  {
    name: "D5couN7S",
    discount: 30,
  },
  {
    name: "4notheRDIscnt",
    discount: 25,
  },
];

function onClickButtonPriceDiscount() {
  //Datos descuento estandar
  const inputPrice = Number(document.getElementById("InputPrice").value);
  const inputDiscount = Number(document.getElementById("InputDiscount").value);
  const parrafo = document.getElementById("finalPrice");

  //Datos cupones
  const inputCoupon = document.getElementById("InputCupon");
  const couponValue = inputCoupon.value;
  // Funcion en la que validamos los cupones
  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  //Resultado de la validacion previa
  const userCoupon = coupons.find(isCouponValueValid);

  // Guardamos el del precio final sin el cupon agregado
  const prevFinalPrice = calcularPrecioConDescuento(inputPrice, inputDiscount);

  if (couponValue === "") {
    if (inputPrice > 0) {
      parrafo.innerText = "El precio con descuento es de $" + prevFinalPrice;
    } else {
      parrafo.innerText = "No hay valores a calcular";
    }
  } else {
    if (!userCoupon) {
      const invalidCupon = document.getElementById("invalidCupon");
      invalidCupon.innerText = "El cupón no es válido";
    } else {
      const descuento = userCoupon.discount;
      const finalPrice = calcularPrecioConDescuento(prevFinalPrice, descuento);
      parrafo.innerText = "El precio con descuento son: $" + finalPrice;
      invalidCupon.innerText = "";
    }
  }
}
