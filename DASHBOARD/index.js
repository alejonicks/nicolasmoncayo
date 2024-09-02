// Selecciona el botón de menú (menuToggle), el sidebar, el área de contenido principal y el mensaje de cierre de sesión
let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('.sidebar');
let content = document.querySelector('#content');
let logoutButton = document.querySelector('.bottom li:last-child'); // Selecciona el botón LOGOUT
let logoutMessage = document.createElement('div'); // Crea un nuevo elemento para el mensaje de cierre de sesión

// Configura el nuevo elemento
logoutMessage.className = 'logout-message';
logoutMessage.textContent = 'CERRANDO SESIÓN';
// Agrega el mensaje al body
document.body.appendChild(logoutMessage);

// Añade un evento de clic al botón de menú
menuToggle.onclick = function() {
    // Alterna la clase 'active' en el botón de menú y en el sidebar
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    
    // Verifica si el sidebar tiene la clase 'active'
    if(sidebar.classList.contains('active')) {
        // Si el sidebar está activo, ajusta la posición del botón y el margen izquierdo del contenido
        menuToggle.style.left = '310px'; // Mueve el botón a la derecha para adaptarse al ancho del sidebar
        content.style.marginLeft = '300px'; // Desplaza el contenido a la derecha para dejar espacio al sidebar
    } else {
        // Si el sidebar no está activo, restablece la posición inicial del botón y el margen del contenido
        menuToggle.style.left = '20px'; // Posición inicial del botón
        content.style.marginLeft = '0'; // Restablece el margen del contenido a 0
    }
};

// Selecciona todos los elementos de la lista en el sidebar
let menuItems = document.querySelectorAll('.Menulist li');

// Función para actualizar el contenido principal basado en la sección seleccionada
function updateContent(section) {
    // Define las variables para el título y el texto
    let title = "";
    let text = "";

    // Utiliza un switch para asignar el título y el texto según la sección seleccionada
    switch(section) {
        case "inicio":
            title = "Últimas Noticias";
            text = "Aquí tienes las últimas noticias relacionadas con Supergiros.<br>Mantente informado de las novedades y cambios importantes.";
            break;
        case "perfil":
            title = "Perfil del Usuario";
            text = "Consulta y actualiza la información de tu perfil.<br>Aquí puedes cambiar tu foto, actualizar datos personales y más.";
            break;
        case "bandeja":
            title = "Bandeja de Entrada";
            text = "Revisa los mensajes y notificaciones importantes.<br>Mantente al día con la comunicación interna.";
            break;
        case "estadisticas":
            title = "Estadísticas del Sistema";
            text = "Consulta el rendimiento y las estadísticas clave de Supergiros.<br>Información detallada y gráficos interactivos.";
            break;
        case "panel":
            title = "Panel de Gestión";
            text = "Accede a las herramientas de administración y gestión del sistema.<br>Controla y personaliza tus opciones.";
            break;
        case "configuracion":
            title = "Configuración del Sistema";
            text = "Ajusta las preferencias y configura las opciones de Supergiros<br>para adaptarlas a tus necesidades.";
            break;
        default:
            title = "Bienvenido al Panel de Control";
            text = "Seleccione una opción del menú para ver más detalles.";
    }

    // Actualiza el contenido principal con el título y el texto correspondientes
    content.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
}

// Añade un evento de clic a cada elemento de la lista del menú
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Elimina la clase 'active' de todos los elementos de la lista
        menuItems.forEach(item => item.classList.remove('active'));
        // Añade la clase 'active' al elemento clicado
        this.classList.add('active');
        // Obtiene el valor del atributo 'data-section' del elemento clicado
        let section = this.getAttribute('data-section');
        // Actualiza el contenido principal con base en la sección seleccionada
        updateContent(section);
    });
});

// Función para manejar el clic en el botón de cierre de sesión
logoutButton.onclick = function() {
    // Muestra el mensaje de cierre de sesión
    logoutMessage.style.display = 'block';

    // Oculta el mensaje después de la animación (3 segundos en este caso)
    setTimeout(() => {
        logoutMessage.style.display = 'none';
        // Aquí podrías redirigir al usuario a la página de inicio de sesión o cerrar sesión
        // window.location.href = 'login.html'; // Ejemplo de redirección
    }, 3000); // 3 segundos
};
