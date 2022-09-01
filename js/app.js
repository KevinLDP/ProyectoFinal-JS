let op;
let suma = 0;
const carrito = [];
let n=0;
let productos = [];

//Cargar productos
async function requestApi(url){
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
}
productos= requestApi('./productData.json');

class Producto {
    constructor(nombre, precio, descripcion, categoria, imagen, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.imagen = imagen;
        this.id = id;}
};

const producto1 = new Producto("Monitor LG", 3800, 'Monitor 24"', "Monitor", "./img/android-chrome-192x192.png", 1);
const producto2 = new Producto("Mouse Asus", 620, 'Mouse óptico 3500 DPI', "Mouse", "./img/android-chrome-192x192.png", 2);
const producto3 = new Producto("Teclado Balam Rush", 1800, "Teclado mecánico retroiluminado", "Teclado", "./img/android-chrome-192x192.png", 3);
const producto4 = new Producto("Impresora HP", 4200, "Impresora blanco y negro", "Impresora", "./img/android-chrome-192x192.png", 4);
const producto5 = new Producto("Cámara Canon", 7159, "Cámara Canon E5", "Cámara", "./img/android-chrome-192x192.png", 5);
const producto6 = new Producto("Monitor Lenovo", 4500, 'Monitor 26"', "Monitor", "./img/android-chrome-192x192.png", 6);
const producto7 = new Producto("Monitor Asus", 6149, 'Monitor 28"', "Monitor", "./img/android-chrome-192x192.png", 7);

productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];


const cardContainerQuery = document.querySelector('#seccionProductos');
productos.forEach((producto) => {
    const cardProducto = document.createElement('div')
    cardProducto.innerHTML = `
        <h3 class="tituloCarta">${producto.nombre}</h3>
        <img src="./img/android-chrome-192x192.png" class="imagenProducto">
        <p class="descripcionProducto">${producto.descripcion}</p>
        <span class="precioProducto"> $ ${producto.precio} MXN </span>
        <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
        `
    cardProducto.className = 'cardContainer'
    cardContainerQuery.append(cardProducto)
})

const botonFiltrar = document.querySelector('#botonFiltrar')
const filtrar = () => {
    const eliminarProductos = document.querySelectorAll('.cardContainer');
    eliminarProductos.forEach((elemento) => {
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
                <button class="botonAgregarCarrito" data-id="${producto.id}"> Agregar al Carrito </button>
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
    const eliminarProductos = document.querySelectorAll('.cardContainer');
    eliminarProductos.forEach((elemento) => {
        elemento.remove();
    });
    productos.forEach((producto) => {
        const cardProducto = document.createElement('div')
        cardProducto.innerHTML = `
            <h3 class="tituloCarta">${producto.nombre}</h3>
            <img src="./img/android-chrome-192x192.png" class="imagenProducto">
            <p class="descripcionProducto">${producto.descripcion}</p>
            <span class="precioProducto"> $ ${producto.precio} MXN </span>
            <button class="botonAgregarCarrito" data-id="${producto.id}> Agregar al Carrito </button>
            `
        cardProducto.className = 'cardContainer'
        cardContainerQuery.append(cardProducto)
    })
}
botonBorrarFiltro.addEventListener('click', borrarFiltro)

const botonesAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito')
const agregarAlCarro = (datosDelEvento) => {
    const idProductoAgregado = datosDelEvento.target.getAttribute('data-id');
    const productoAgrgado = productos.find((produc) => produc.id == idProductoAgregado);
    carrito.push(productoAgrgado);
    Toastify({

        text: "Producto agregado",
        offset: {
            x: 10,
            y: 220
          },
        duration: 3000
        
        }).showToast();
    console.log(carrito);
}
botonesAgregarCarrito.forEach((boton) => {
    boton.addEventListener('click', agregarAlCarro);
})

const VerCarro = () => {
    carrito.forEach((producto) =>{
        n = Number(sessionStorage.getItem('n'))
        console.log(producto);
        enJSON = JSON.stringify(producto);
        sessionStorage.setItem(`producto`+ n, enJSON);
        n++;
        sessionStorage.setItem('n', n)
    }) 
}
const botonVerCarrito = document.querySelector('#botonVerCarrito')
botonVerCarrito.addEventListener('click', VerCarro );

