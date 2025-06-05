// productos.js
// Código extraído de productos.html

/**
 * Array que almacena todos los productos disponibles en la tienda
 * Cada producto es un objeto con propiedades:
 * - nombre: string
 * - precio: number (en CLP)
 * - categoria: string
 * - imagen: string (URL de la imagen)
 */
const productos = [
    // ... (aquí va el array de productos tal como está en productos.html)
];

/**
 * Array que almacena los productos agregados al carrito
 * Cada producto es un objeto con {nombre, precio}
 */
let carrito = [];

// ... (todas las funciones JS de productos.html, igual que en el bloque <script>)

// Inicializa la página mostrando todos los productos
mostrarProductos(); 