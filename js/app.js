let op;
let suma = 0;
let carrito = "Productos seleccionados: \n";

function mostrarCarrito(){
    alert("Este es tu carrito: \n" + carrito + "El total de tus productos es: $ " + suma + " MXN");
}

class Producto {
    constructor(nombre, precio, descripcion, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
};

const producto1 = new Producto("Monitor LG", 3800, 'Monitor 24"', "Monitor");
const producto2 = new Producto("Mouse Asus", 620, 'Mouse óptico 3500 DPI', "Mouse");
const producto3 = new Producto("Teclado Balam Rush", 1800, "Teclado mecánico retroiluminado", "Teclado");
const producto4 = new Producto("Impresora HP", 4200, "Impresora blanco y negro", "Impresora");
const producto5 = new Producto("Cámara Canon", 7159, "Cámara Canon E5", "Cámara");
const producto6 = new Producto("Monitor Lenovo", 4500, 'Monitor 26"', "Monitor");
const producto7 = new Producto("Monitor Asus", 6149, 'Monitor 28"', "Monitor");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];


do{
    op = Number(prompt('¿Quieres hacer una búsqueda por categoría? 1.SI 2.NO(Se mostrarán todos los productos)'));
    if (op == 1){
        let filtro = prompt("Nuestras categorías: Monitor, Mouse, Teclado, Impresora, Cámara.")
        const productosFiltro = productos.filter((producto) => producto.categoria == filtro);
        
        let lista = "";
        for(let i = 0; i < productosFiltro.length; i++){
            lista += (i+1) + "." + productosFiltro[i].nombre + "\n";
        }
        do{
            let num = (Number(prompt(`Elige un producto por su número: \n` + lista)) - 1);
            op = Number(prompt("Seleccionaste: " + productosFiltro[num].nombre + " \nDescripción: " + productosFiltro[num].descripcion + " \nPrecio: $" + productosFiltro[num].precio + "MXN\nEscibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + productosFiltro[num].precio;
                carrito += "-" + productosFiltro[num].nombre + "\n";
            };
            op = Number(prompt('¿Quieres revisar otro producto con este filtro? 1.SI 2.NO'));
        }while(op == 1)
    }
    else{
        let lista = "";
        for(let i = 0; i < productos.length; i++){
            lista += (i+1) + "." + productos[i].nombre + "\n";
        }
        do{
            let num = (Number(prompt(`Elige un producto por su número: \n` + lista)) - 1);
            op = Number(prompt("Seleccionaste: " + productos[num].nombre + " \nDescripción: " + productos[num].descripcion + " \nPrecio: $" + productos[num].precio + "MXN\nEscibe 1 para agregar al carrito o 2 para salir del producto"));
            if(op == 1){
                suma = suma + productos[num].precio;
                carrito += "-" + productos[num].nombre + "\n";
            };
            op = Number(prompt('¿Quieres revisar otro producto de esta lista? 1.SI 2.NO'));
        }while(op == 1)
    }
    op = Number(prompt('¿Quieres revisar otro producto? 1.SI 2.NO'));
}while (op == 1);
mostrarCarrito();