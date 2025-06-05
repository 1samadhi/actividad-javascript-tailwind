// index.js
// Código extraído de index.html

/**
 * Array que almacena los productos agregados al carrito
 * Cada producto es un objeto con {nombre, precio}
 */
let carrito = [];

/**
 * Agrega un producto al carrito de compras
 * Esta función se ejecuta cuando el usuario hace clic en "Agregar al Carrito"
 * 
 * @param {string} nombre - Nombre del producto a agregar
 * @param {number} precio - Precio del producto en pesos chilenos (CLP)
 * 
 * Ejemplo de uso:
 * agregarAlCarrito('Laptop Pro X1', 899990)
 */
function agregarAlCarrito(nombre, precio) {
    // Agrega el producto al array del carrito
    carrito.push({ nombre, precio });
    // Actualiza la visualización del carrito
    actualizarCarrito();
    // Muestra una notificación de confirmación
    mostrarNotificacion(`${nombre} agregado al carrito`);
}

/**
 * Actualiza la visualización del carrito de compras
 * Esta función:
 * 1. Muestra/oculta el carrito según si hay productos
 * 2. Actualiza la lista de productos en el carrito
 * 3. Calcula y muestra el total
 * 
 * Se ejecuta cada vez que se agrega o elimina un producto
 */
function actualizarCarrito() {
    // Obtiene referencias a los elementos del DOM
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    const carritoDiv = document.getElementById('carrito');

    if (carrito.length > 0) {
        // Si hay productos, muestra el carrito
        carritoDiv.classList.remove('hidden');
        
        // Genera el HTML para cada producto en el carrito
        carritoItems.innerHTML = carrito.map(item => 
            `<div class="flex justify-between mb-1">
                <span>${item.nombre}</span>
                <span>$${item.precio.toLocaleString('es-CL')}</span>
            </div>`
        ).join('');
        
        // Calcula el total sumando los precios de todos los productos
        const total = carrito.reduce((sum, item) => sum + item.precio, 0);
        // Muestra el total formateado en pesos chilenos
        carritoTotal.textContent = total.toLocaleString('es-CL');
    } else {
        // Si no hay productos, oculta el carrito
        carritoDiv.classList.add('hidden');
    }
}

/**
 * Muestra una notificación temporal en la pantalla
 * La notificación aparece en la esquina superior derecha
 * y desaparece automáticamente después de 3 segundos
 * 
 * @param {string} mensaje - El mensaje a mostrar en la notificación
 * 
 * Ejemplo de uso:
 * mostrarNotificacion('Producto agregado al carrito')
 */
function mostrarNotificacion(mensaje) {
    // Crea un nuevo elemento div para la notificación
    const notificacion = document.createElement('div');
    // Aplica estilos usando clases de Tailwind
    notificacion.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
    // Establece el mensaje
    notificacion.textContent = mensaje;
    // Agrega la notificación al documento
    document.body.appendChild(notificacion);

    // Programa la eliminación de la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
} 