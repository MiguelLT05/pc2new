/*
    SI YO INGRESARÁ DIRECTAMENTE
    A DASHBOARD.HTML 
    SIN HABERME LOGEADO
    DEBERIA DE DEVOLVERME A INDEX.HTML

    --> codigo parecido dentro de profefavorito
    --> localStorage()
*/

const info = [{   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Juan Perez",
        "Ciclo": "5° Ciclo",
        "Carrera": "Ingeniería de Sistemas e Informática",
        "foto": "images/image5.png"
    }];


//Imprimir esa lista de compras
const $miPerfil = $("#miPerfil");
info.forEach((info) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "perfil.html?idperfil="+info.id;
    const template = `
        <li class="collection-item avatar" data-id="${info.id}" data-uuid="${info.uuid}">
            <div id="imagenes">
                <img class="Imagen" src="${info.foto}">
            </div>
            <h3>${info.nombre}</h3>
            <p>
                ${info.Carrera}        
            </p>
            <p>
                Ciclo Actual: ${info.Ciclo}
            </p>
        </li>
    `;
    $miPerfil.append(template);
});