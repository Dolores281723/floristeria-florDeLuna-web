     // --- LÓGICA DEL CARRITO DE LA COMPRA ---
        let cart = [];
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        const cartCountElement = document.getElementById('cart-count');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const name = button.dataset.name;
                const price = parseFloat(button.dataset.price);
                addToCart({ name, price });
            });
        });

        function addToCart(product) {
            cart.push(product);
            updateCartUI();
            alert(`"${product.name}" ha sido añadido al carrito.`);
        }
        
        function updateCartUI() {
            cartCountElement.textContent = cart.length;
        }

        function showCart() {
            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }

            let cartContent = "Contenido de tu carrito:\n\n";
            let total = 0;

            cart.forEach(product => {
                cartContent += `- ${product.name}: ${product.price.toFixed(2)}€\n`;
                total += product.price;
            });
            
            cartContent += `\nTotal: ${total.toFixed(2)}€`;
            alert(cartContent);
        }

        // --- LÓGICA DEL FORMULARIO DE CONTACTO (SIMULACIÓN) ---
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue
            alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
            contactForm.reset(); // Limpia el formulario después de enviarlo
        });

        /* === LÓGICA PARA EL MENÚ DESPLEGABLE === */
/* ========================================= */

// Seleccionamos todos los elementos que tienen un submenú
const dropdownItems = document.querySelectorAll('.has-dropdown > a');

dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevenimos que el enlace navegue (comportamiento por defecto de <a>)
        event.preventDefault();

        // Buscamos el submenú que corresponde a este item
        const submenu = this.nextElementSibling;
        
        // Verificamos si el submenú que clickeamos ya está abierto
        const isAlreadyOpen = submenu.classList.contains('show');

        // Primero, cerramos TODOS los submenús que puedan estar abiertos
        closeAllSubmenus();

        // Si el submenú no estaba abierto, lo abrimos
        if (!isAlreadyOpen) {
            submenu.classList.add('show');
        }
    });
});

// Función para cerrar todos los submenús abiertos
function closeAllSubmenus() {
    document.querySelectorAll('.submenu.show').forEach(openSubmenu => {
        openSubmenu.classList.remove('show');
    });
}

// Opcional: Cerrar los menús si el usuario hace clic en cualquier otra parte de la página
window.addEventListener('click', function(event) {
    // Si el clic NO fue dentro de un elemento con la clase 'has-dropdown'
    if (!event.target.closest('.has-dropdown')) {
        closeAllSubmenus();
    }
});