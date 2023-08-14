const producto1 = "Auriculares $20000";
const producto1Precio = 20000;
const producto2 = "Teclado $40000";
const producto2Precio = 40000;
const producto3 = "PC COMPLETA $50000";
const producto3Precio = 50000;

let agregar = confirm("¿Desea agregar un producto al carrito?");
let total = 0;
let carrito = "";


const esProductoValido = (producto) => {
	return producto === 1 || producto === 2 || producto === 3;
};

const esCantidadInvalida = (cantidad) => {
	return isNaN(cantidad) || cantidad <= 0;
};

const pedirProducto = () => {
	let productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
	while (!esProductoValido(productoElegido)) {
		alert("Producto desconocido. Ingrese el número de producto");
		productoElegido = parseInt(prompt(`¿Qué producto desea agregar?\n 1. ${producto1}\n 2. ${producto2}\n 3. ${producto3}`));
	}
	return productoElegido;
};

const pedirCantidad = () => {
	let cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
	while (esCantidadInvalida(cantidad)) {
		alert("Ingrese una cantidad válida");
		cantidad = parseInt(prompt(`¿Cuántas unidades desea?`));
	}
	return cantidad;
};

const mostrarCarrito = () => {
	let mensaje = "";
	carrito.forEach((producto) => {
		mensaje += `Producto: ${producto.nombre} ---------------------------------------- $${producto.precio}\n`;
	});
	mensaje += `Total: $${total}`;
	alert(mensaje);
};


while (agregar) {
	const producto = pedirProducto();
	const cantidad = pedirCantidad();
	switch (producto) {
		case 1:
			carrito += `${cantidad}u. producto: ${producto1}\n`;
			total += producto1Precio * cantidad;
			break;
		case 2:
			carrito += `${cantidad}u. producto: ${producto2}\n`;
			total += producto2Precio * cantidad;

			break;
		case 3:
			carrito += `${cantidad}u. producto: ${producto3}\n`;
			total += producto3Precio * cantidad;

			break;
	}
	agregar = confirm("¿Desea agregar otro producto?");
}

if (total > 0) {
	let mensaje = carrito + `Total: $${total}`;
	alert(mensaje);
} else {
	alert("¡Muchas gracias por su Compra!!");
}
