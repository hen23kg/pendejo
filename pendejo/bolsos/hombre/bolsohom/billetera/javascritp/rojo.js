// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precio) {
    // Crear un objeto del producto
    const producto = {
        nombre: nombreProducto,
        precio: precio
    };

    // Aquí podrías agregar lógica para almacenar el producto en un carrito (por ejemplo, en un array o en localStorage)
    console.log(`Producto agregado al carrito: ${producto.nombre}, Precio: $${producto.precio}`);
    
    // Retornar el producto para uso futuro si es necesario
    return producto;
}
