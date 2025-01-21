document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        console.log("Formulario detectado en contacto.html");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (!nombre || !email || !mensaje) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            const serviceID = "service_vgj6tpe";
            const templateID = "template_oiy7ha4";

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert("¡Mensaje enviado con éxito!");
                    this.reset();
                }, (err) => {
                    alert("Ocurrió un error al enviar el mensaje.");
                    console.error("Error:", err);
                });
        });
    } else {
        console.log("Formulario no detectado en contacto.html");
    }
});
