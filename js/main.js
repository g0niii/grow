
function Producto(id, productName, imagen, categoria, precio) {
    this.id = id;
    this.productName = productName;
    this.imagen = imagen;
    this.categoria = categoria;
    this.precio = precio;
    
}

const productos = [
    new Producto("sema-01", "Purple Punch", "./img/01.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-02", "Bubble Gum", "./img/02.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-03", "Critical Fast", "./img/03.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-04", "Wifi Tangie", "./img/04.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-05", "Power Skunk", "./img/05.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-06", "Super Skunk", "./img/06.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-07", "CBD CONNECTAR", "./img/07.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("sema-08", "Girl Scout Cookies", "./img/08.jpg", {nombre:"semillas", id:"semillas"}, 1500),
    new Producto("pipa-09", "Pipa de vidrio", "./img/09.jpg", {nombre:"pipa", id:"pipa"}, 1500),
    new Producto("sema-10", "Pipa de vidrio 2", "./img/10.jpg", {nombre:"pipa", id:"pipa"}, 1500),
    new Producto("pipa-11", "Pipa de vidrio 3", "./img/11.jpg", {nombre:"pipa", id:"pipa"}, 1500),
    new Producto("pipa-12", "Pipa de Hueso", "./img/12.jpg", {nombre:"pipa", id:"pipa"}, 1500)

];


const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")

function cargarProductos(productosElegidos) {
    

    productosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.productName}" >
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.productName}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `
        contenedorProductos.append(div);
    })
}


cargarProductos(productos)

botonesCategorias.forEach(boton => {
	boton.addEventListener("click", (e) => {
		botonesCategorias.forEach (boton =>  boton.classList.remove("active"))
	e.currentTarget.classList.add("active")

    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
    cargarProductos(productosBoton)
})
})

console.log(document.body)


