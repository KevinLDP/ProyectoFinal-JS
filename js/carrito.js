const carrito = [];
let n = 0;
let m;

m = Number(sessionStorage.getItem('n'))

const CargarCarro = () =>{
    for(let i = 0; i<m; i++){
        const productoAgrgado = JSON.parse(sessionStorage.getItem('producto'+i))
        carrito.push(productoAgrgado);
    }
}


const MostrarCarrito = () =>{
    const cardContainerQuery = document.querySelector('#listaCarrito');
    carrito.forEach((producto) => {
        producto.id=n;
        const cardProducto = document.createElement('tr')
        cardProducto.innerHTML = `
            <th scope="row">${n+1}</th>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$ ${producto.precio} MXN</td>
            `
            // <td><button id="eliminarDelCarro" data-id="${producto.id}"> Eliminar </button></td>
            
        cardProducto.className = 'cardContainer'
        cardContainerQuery.append(cardProducto)
        n++;
    })
}
const EliminarCarrito = () => {
    const eliminarProductos = document.querySelectorAll('.cardContainer');
    eliminarProductos.forEach((elemento) => {
        elemento.remove();
    });
    carrito.splice(0, n-1)
}
EliminarCarrito();
CargarCarro();
MostrarCarrito();



// const EliminarProductoDelCarro = (datosDelEvento) => {
//     const idProductoEliminar = datosDelEvento.target.getAttribute('data-id');
//     sessionStorage.removeItem('producto'+idProductoEliminar)
//     sessionStorage.setItem('n', n-1)
//     EliminarCarrito();
//     CargarCarro();
//     MostrarCarrito();
// }
// const botonEliminarDelCarro = document.querySelectorAll('#eliminarDelCarro');

// botonEliminarDelCarro.forEach((boton) => {
//     boton.addEventListener('click', EliminarProductoDelCarro);
// })

// console.log(carrito);