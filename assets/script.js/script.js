
document.addEventListener('DOMContentLoaded', function() {
// Variables para los elementos del chat
let ContenedorChat = document.getElementById("ContenedorChats");
let btnNuevoChat = document.getElementById("newChat");

//  funcion  para el nuevo chat

function CrearNuevoChat() {
    const nuevoChat = document.createElement("div");
    nuevoChat.className = "Container__Chat__elementos"; 

    const imgChat = document.createElement("img");
    imgChat.src = "assets/images/nuevo_chat.png"; 
    imgChat.className = "Chat__img";

    // funcion par crear un  div co los elementos del chat
    function contenedor_h2_p() {
        const contenedor_h2_p = document.createElement("div");
        contenedor_h2_p.className = "Container__Chat__1"; 

        const nombreChat = document.createElement("h2");
        nombreChat.innerText = "nuevo contacto";
        nombreChat.className = "Container__Chat__h2";

        const horaChat = document.createElement("h2");
        horaChat.innerText = "9:30";
        horaChat.className = "Container__Chat__h2";

        const textoChat = document.createElement("p");
        textoChat.innerText = " hola como estas";
        textoChat.className = "Container__Chat__p";

        // appendChild ingresa loe elementos al DOM
        contenedor_h2_p.appendChild(nombreChat);
        contenedor_h2_p.appendChild(horaChat);
        contenedor_h2_p.appendChild(textoChat);

        return contenedor_h2_p; // Devolver el contenedor
    }

    const divInterno = contenedor_h2_p();// obtiene el  div creado

    nuevoChat.appendChild(imgChat);
    nuevoChat.appendChild(divInterno);
    
    ContenedorChat.appendChild(nuevoChat); // agrega el nuevo chat al dom con la estructura antes descrita
}

btnNuevoChat.addEventListener("click", CrearNuevoChat); // activa la funcion para crear el nuevo chat


/* para canbiar de activo aa inactivo */

const boton = document.getElementById("Chat__img__button");
const imagen = document.getElementById("Chat__img__activo");

boton.addEventListener('click', function() {
    imagen.src = imagen.src.endsWith('assets/images/inactivo.png') ? 'assets/images/activo.jpg' : 'assets/images/inactivo.png';
    imagen.alt = imagen.src.endsWith('assets/images/inactivo.png') ? 'activo' : 'inactivo';
    imagen.className = "Chat__img__activo";
});



// Evento para enviar un mensaje


    const chatArea = document.getElementById("areachat");
    const mensajeInput = document.getElementById("mensajeInput");
    const botonEnter = document.getElementById("enter");

    function enviarMensaje() {
        var mensaje = mensajeInput.value;

        if (mensaje !== "") {
            
            var nuevoMensaje = document.createElement("p");
            nuevoMensaje.className= "mensaje__enviado"
            nuevoMensaje.innerText = mensaje;
            chatArea.appendChild(nuevoMensaje);
            mensajeInput.value = "";
            
        }
    }

    botonEnter.addEventListener("click", enviarMensaje);


// funcion para cambiar el chat en el header

let chatsIndividuales = document.querySelectorAll(".Container__Chat__elementos");

chatsIndividuales.forEach(chat => { // forEach es igual a para cada uno 
    chat.addEventListener("click", function() {
        let imgChatClon = chat.querySelector(".Chat__img").cloneNode(true);
        let nombreChatClon = chat.querySelector(".Container__Chat__h2").cloneNode(true);

        let encabezadoChatPrincipal = document.querySelector(".Container__Principal__header");
        encabezadoChatPrincipal.innerHTML = "";

        let contenedorFlex = document.createElement("div");
        contenedorFlex.classList.add("Container__Chat__header");
        contenedorFlex.appendChild(imgChatClon);
        imgChatClon.className =( "header__img");
        contenedorFlex.appendChild(nombreChatClon);
        nombreChatClon.className = ("header__name");

        encabezadoChatPrincipal.appendChild(contenedorFlex);
    });
});

});