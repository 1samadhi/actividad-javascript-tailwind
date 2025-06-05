// contacto.js
// Código extraído de contacto.html

/**
 * Valida el formulario de contacto antes de enviarlo
 * Esta función:
 * 1. Obtiene los valores de todos los campos
 * 2. Valida que los campos requeridos no estén vacíos
 * 3. Valida el formato del email
 * 4. Valida que el mensaje tenga al menos 10 caracteres
 * 
 * @returns {boolean} - true si el formulario es válido, false si hay errores
 * 
 * Ejemplo de uso:
 * if (validarFormulario()) {
 *     // Enviar formulario
 * }
 */
function validarFormulario() {
    // Obtiene referencias a los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Valida que el nombre no esté vacío
    if (nombre === '') {
        mostrarError('nombre', 'Por favor ingrese su nombre');
        return false;
    }
    
    // Valida el formato del email usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mostrarError('email', 'Por favor ingrese un email válido');
        return false;
    }
    
    // Valida que el mensaje tenga al menos 10 caracteres
    if (mensaje.length < 10) {
        mostrarError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
        return false;
    }
    
    // Si todas las validaciones pasan, muestra mensaje de éxito
    mostrarNotificacionExito();
    return true;
}

/**
 * Muestra un mensaje de error para un campo específico
 * Esta función:
 * 1. Obtiene el elemento del campo
 * 2. Agrega una clase de error al campo
 * 3. Muestra el mensaje de error debajo del campo
 * 
 * @param {string} campoId - ID del campo que tiene el error
 * @param {string} mensaje - Mensaje de error a mostrar
 * 
 * Ejemplo de uso:
 * mostrarError('email', 'Por favor ingrese un email válido')
 */
function mostrarError(campoId, mensaje) {
    // Obtiene el elemento del campo
    const campo = document.getElementById(campoId);
    // Agrega la clase de error al campo
    campo.classList.add('border-red-500');
    
    // Crea o actualiza el elemento de mensaje de error
    let errorDiv = document.getElementById(`${campoId}-error`);
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = `${campoId}-error`;
        campo.parentNode.appendChild(errorDiv);
    }
    
    // Establece el mensaje de error
    errorDiv.textContent = mensaje;
    errorDiv.className = 'text-red-500 text-sm mt-1';
}

/**
 * Muestra una notificación de éxito cuando el formulario se envía correctamente
 * Esta función:
 * 1. Crea un elemento de notificación
 * 2. Lo muestra en la pantalla
 * 3. Lo elimina después de 3 segundos
 * 
 * Ejemplo de uso:
 * mostrarNotificacionExito()
 */
function mostrarNotificacionExito() {
    // Crea un nuevo elemento div para la notificación
    const notificacion = document.createElement('div');
    // Aplica estilos usando clases de Tailwind
    notificacion.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
    // Establece el mensaje
    notificacion.textContent = '¡Mensaje enviado con éxito!';
    // Agrega la notificación al documento
    document.body.appendChild(notificacion);

    // Programa la eliminación de la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
} 