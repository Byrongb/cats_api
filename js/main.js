let api_url = "https://api.thecatapi.com/v1/images/search?limit=10";
const button = document.querySelector("button");

async function actualizarGato(api) {
    let obtenerGato = await fetch(api);
    let dato = await obtenerGato.json();

    cargar_gatos(dato);
}

function cargar_gatos(data) {
    let dom = document.querySelector(".root");
    dom.innerHTML = ""; 

    data.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("image-container");
        item.innerHTML = `
            <img src="${element.url}">
        `;

        dom.appendChild(item);
    });
}

actualizarGato(api_url);

button.addEventListener("click", function() {
    actualizarGato(api_url);
});