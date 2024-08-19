let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.getElementById('download-btn').addEventListener('click', function() {
    // URL del archivo PDF
    const pdfUrl = "/doc/Roman_Qquelcca_CV.pdf";

    // Crear un enlace de descarga y hacer clic en él
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "CV_Rivaldo_Fernandez.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


function initMap() {
    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: -16.39889, lng: -71.535} // Coordenadas de tu ubicación
    });

    // Crear el marcador
    var marker = new google.maps.Marker({
        position: {lat: -16.39889, lng: -71.535}, // Coordenadas de tu ubicación
        map: map,
        title: 'Aquí estoy!' // Mensaje que aparece al pasar el cursor sobre el marcador
    });
}

document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Crear el mensaje para enviar con saltos de línea
    const whatsappMessage = `Nombre: ${encodeURIComponent(name)}%0A` +
                            `Correo: ${encodeURIComponent(email)}%0A` +
                            `Tema: ${encodeURIComponent(subject)}%0A` +
                            `Mensaje: ${encodeURIComponent(message)}`;

    // Número de teléfono específico
    const phone = '51993074958'; // Sin el signo +

    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

    console.log('WhatsApp URL:', whatsappUrl);

    window.open(whatsappUrl, '_blank');


    document.getElementById('response-message').innerText = 'Mensaje preparado para enviar por WhatsApp.';
});
