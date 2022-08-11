let op;
let suma = 0;
let carrito = "Productos seleccionados: \n";

function mostrarCarrito(){
    alert("Este es tu carrito: \n" + carrito + "El total de tus productos es: $ " + suma + " MXN");
}

class Producto {
    constructor(nombre, precio, descripcion, categoria, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.imagen = imagen;}
};

const producto1 = new Producto("Monitor LG", 3800, 'Monitor 24"', "Monitor", "./img/android-chrome-192x192.png");
const producto2 = new Producto("Mouse Asus", 620, 'Mouse óptico 3500 DPI', "Mouse", "./img/android-chrome-192x192.png");
const producto3 = new Producto("Teclado Balam Rush", 1800, "Teclado mecánico retroiluminado", "Teclado", "./img/android-chrome-192x192.png");
const producto4 = new Producto("Impresora HP", 4200, "Impresora blanco y negro", "Impresora", "./img/android-chrome-192x192.png");
const producto5 = new Producto("Cámara Canon", 7159, "Cámara Canon E5", "Cámara", "./img/android-chrome-192x192.png");
const producto6 = new Producto("Monitor Lenovo", 4500, 'Monitor 26"', "Monitor", "./img/android-chrome-192x192.png");
const producto7 = new Producto("Monitor Asus", 6149, 'Monitor 28"', "Monitor", "./img/android-chrome-192x192.png");

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];


const cardContainerQuery = document.querySelector('#seccionProductos');
productos.forEach((producto) => {
    const cardProducto = document.createElement('div')
    cardProducto.innerHTML = `
        <h3 class="tituloCarta">${producto.nombre}</h3>
        <img src="./img/android-chrome-192x192.png" class="imagenProducto">
        <p class="descripcionProducto">${producto.descripcion}</p>
        <span class="precioProducto"> $ ${producto.precio} MXN </span>
        <button class="botonAgregarCarrito"> Agregar al Carrito </button>
        `
    cardProducto.className = 'cardContainer'
    cardContainerQuery.append(cardProducto)
})

const botonFiltrar = document.querySelector('#botonFiltrar')
const filtrar = () => {
    const eliminarPorClase = document.querySelectorAll('.cardContainer');
    eliminarPorClase.forEach((elemento) => {
        elemento.remove();
    });
    const cbMonitor = document.querySelector('#monitorFilter');
    const cbMouse = document.querySelector('#mouseFilter');
    const cbTeclado = document.querySelector('#tecladoFilter');
    const cbImpresora = document.querySelector('#impresoraFilter');
    const cbCamara = document.querySelector('#camaraFilter');
    
    if (cbMonitor.checked == true){
        const productosFiltro = productos.filter((producto) => producto.categoria == 'Monitor');
        productosFiltro.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
    if (cbMouse.checked == true){
        const productosFiltro = productos.filter((producto) => producto.categoria == 'Mouse');
        productosFiltro.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
    if (cbTeclado.checked == true){
        const productosFiltro = productos.filter((producto) => producto.categoria == 'Teclado');
        productosFiltro.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
    if (cbImpresora.checked == true){
        const productosFiltro = productos.filter((producto) => producto.categoria == 'Impresora');
        productosFiltro.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
    if (cbCamara.checked == true){
        const productosFiltro = productos.filter((producto) => producto.categoria == 'Cámara');
        productosFiltro.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
    if (cbCamara.checked == false && cbImpresora.checked == false && cbTeclado.checked == false && cbMouse.checked == false && cbMonitor.checked == false){
        productos.forEach((producto) => {
            const cardProducto = document.createElement('div')
            cardProducto.innerHTML = `
                <h3 class="tituloCarta">${producto.nombre}</h3>
                <img src="./img/android-chrome-192x192.png" class="imagenProducto">
                <p class="descripcionProducto">${producto.descripcion}</p>
                <span class="precioProducto"> $ ${producto.precio} MXN </span>
                <button class="botonAgregarCarrito"> Agregar al Carrito </button>
                `
            cardProducto.className = 'cardContainer'
            cardContainerQuery.append(cardProducto)
        })
    }
}
botonFiltrar.addEventListener('click', filtrar)

const botonBorrarFiltro = document.querySelector('#botonBorrarFiltro');
const borrarFiltro = () => {
    const cbMonitor = document.querySelector('#monitorFilter');
    const cbMouse = document.querySelector('#mouseFilter');
    const cbTeclado = document.querySelector('#tecladoFilter');
    const cbImpresora = document.querySelector('#impresoraFilter');
    const cbCamara = document.querySelector('#camaraFilter');
    cbMonitor.checked = false;
    cbMouse.checked = false;
    cbTeclado.checked = false;
    cbImpresora.checked = false;
    cbCamara.checked = false;
    const eliminarPorClase = document.querySelectorAll('.cardContainer');
    eliminarPorClase.forEach((elemento) => {
        elemento.remove();
    });
    productos.forEach((producto) => {
        const cardProducto = document.createElement('div')
        cardProducto.innerHTML = `
            <h3 class="tituloCarta">${producto.nombre}</h3>
            <img src="./img/android-chrome-192x192.png" class="imagenProducto">
            <p class="descripcionProducto">${producto.descripcion}</p>
            <span class="precioProducto"> $ ${producto.precio} MXN </span>
            <button class="botonAgregarCarrito"> Agregar al Carrito </button>
            `
        cardProducto.className = 'cardContainer'
        cardContainerQuery.append(cardProducto)
    })
}
botonBorrarFiltro.addEventListener('click', borrarFiltro)
