let usuario;
let contraseña;


do {
  usuario = prompt("Bienvenido a mundo cambio de divisas ,ingrese su nuevo nombre de usuario");
  contraseña = prompt("Ahora, elige una contraseña nueva");

  if (!usuario || !contraseña) {
    alert("Ambos campos son obligatorios. Por favor, inténtalo nuevamente.");
  } else {
    alert("Fue registrado correctamente, Bienvenido a mundo cambio de divisas , " + usuario + ".");
  }
} while (!usuario || !contraseña);




let continuar = true;
let dolarCompra = 725;
let dolarVenta =730;
let euroCompra =783;
let euroVenta =848;
let realesCompra =95;
let realesVenta=100;
let cantidad;
let resultado;

function calculoDivisas(cantidad, valorMoneda) {
    return cantidad * valorMoneda;
  }


while (continuar) {
  let operacion = prompt("Elige la operacion que quiera realizar:\n1. Comprar Dolares\n2. Vender Dolares\n3. Comprar Euros\n4. Vender Euros\n5. Comprar Reales \n6. Vender Reales \n7. Salir ");

  switch (operacion) {
    case '1':
       cantidad = parseFloat(prompt("Ingresa la cantidad de DOLARES que desee comprar"));
       resultado = calculoDivisas(cantidad, dolarCompra);
      console.log("El valor de compra de "+ cantidad + "  Dolares en el dia de hoy es $"+ (resultado) +" Pesos argentinos");
        break;

    case '2':
      cantidad = parseFloat(prompt("Ingrese la cantidad de DOLARES que desee vender"));
      resultado = calculoDivisas(cantidad, dolarVenta);
      console.log("El valor de venta de  "+ cantidad + " Dolares en el dia de hoy es $"+ (resultado) +" Pesos argentinos");

      break;

    case '3':
    cantidad = parseFloat(prompt("Ingrese la cantidad de EUROS que desee comprar"));
    resultado = calculoDivisas(cantidad, euroCompra);
    console.log("El valor de coompra de "+ cantidad +" Euros en el dia de hoy es $"+ resultado +" Pesos argentinos");

      break;

    case '4':
       cantidad = parseFloat(prompt("Ingrese la cantidad de EUROS que desee vender"));
       resultado = calculoDivisas(cantidad, euroVenta);
       console.log("El valor de venta de "+ cantidad +" Euros en el dia de hoy es $"+ resultado +" Pesos argentinos");

      
      break;

      case '5':
       cantidad = parseFloat(prompt("Ingrese la cantidad de REALES que desee comprar"));
       resultado = calculoDivisas(cantidad, realesCompra);
       console.log("El valor de compra  "+ cantidad +" Reales en el dia de hoy es $"+ resultado +" Pesos argentinos");

    
      break;

      case '6':
         cantidad = parseFloat(prompt("Ingrese la cantidad de REALES que desee vender"));
         resultado = calculoDivisas(cantidad, realesVenta);
         console.log("El valor de venta de "+ cantidad +" Reales en el dia de hoy es $"+ resultado +" Pesos argentinos");

      
        break;
    case '7':
      continuar = false;
      break;

    default:
      alert("Operación no válida. Por favor, elige una operación válida.");
  }
}