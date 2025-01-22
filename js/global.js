// Seleccionar el botón del menú hamburguesa y el contenedor del menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

// Escuchar el evento "click" en el botón hamburguesa
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

console.log("El archivo script.js se está ejecutando correctamente.");

function cerrarCintilla() {
    const cintilla = document.querySelector('.cintilla-construccion');
    cintilla.style.display = 'none';
}


// Seleccionar el botón del menú hamburguesa y el contenedor del menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

// Escuchar el evento "click" en el botón hamburguesa
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Variables para el modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Agregar evento a las imágenes de la galería
const galleryItems = document.querySelectorAll(".galeria-item img");
if (galleryItems) {
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Formulario de contacto
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío por defecto

        // Validar los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (email === "" || !validarEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (mensaje === "" || mensaje.length < 10) {
            alert("Por favor, escribe un mensaje de al menos 10 caracteres.");
            return;
        }

        // Enviar el formulario usando EmailJS
        const serviceID = "service_vgj6tpe";
        const templateID = "template_oiy7ha4";

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert("¡Mensaje enviado con éxito!");
                this.reset(); // Limpia el formulario
            }, (err) => {
                alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
                console.error("Error: ", err);
            });
    });
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
