/*
    SI YO INGRESARÁ DIRECTAMENTE
    A DASHBOARD.HTML 
    SIN HABERME LOGEADO
    DEBERIA DE DEVOLVERME A INDEX.HTML

    --> codigo parecido dentro de profefavorito
    --> localStorage()
*/

const cursos = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Desarrollo Web",
        "dia": "Miercoles",
        "horario": "8:15 a.m. - 12:45 p.m.",
        "descripcion": [
            {
                "Imagen": "images/image2.png",
                "descripcion": "En este curso se verá el proceso de creación de un sitio web, una aplicación o un software. Se debe hacer un estudio para determinar las necesidades del cliente y a partir de ahí poner en marcha una interfaz atractiva e incorporar funcionalidades para el usuario final.",

            }
        ]
    },
    {
        "id": "17",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Programación",
        "dia": "Lunes",
        "horario": "8:15 a.m. - 12:45 p.m.",
        "descripcion": [
            {
                "Imagen": "images/image3.jfif",
                "descripcion":"En este curso se verá la creación programas o aplicaciones a través del desarrollo de un código fuente, que se basa en el conjunto de instrucciones que sigue el ordenador para ejecutar un programa."
            }
        ]
    },
    {
        "id": "16",
        "uuid": "1566664514aa",
        "nombre": "Hackeo de Facebook",
        "dia": "Viernes",
        "horario": "8:15 a.m. - 12:45 p.m.",
        "descripcion": [
            {
                "Imagen": "images/image4.jfif",
                "descripcion":"En este curso se verá como hackear Facebook, para que veas como tu novi@ te pone los cachos xd"
            }
        ]
    }
];
//Imprimir esa lista de compras
const $misCursos = $("#misCursos");
cursos.forEach((cursos) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "cursos.html?idcurso="+cursos.id;
    const template = `
        <li class="collection-item avatar" data-id="${cursos.id}" data-uuid="${cursos.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${cursos.nombre}</span>
            <p>
                ${cursos.dia}        
            </p>
            <p>
                ${cursos.horario}        
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                Descripcion del Curso
            </a>
        </li>
    `;
    $misCursos.append(template);
});

/*
    3. En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcurso = params.get("idcurso");
let miscursos = [];
if (idcurso) {
    cursos.forEach((curso) => {
        if (curso.id == idcurso) {
            const mytitle = curso.nombre;
            $("#myTitle").html(mytitle);
            miscursos = curso.descripcion;           
        }
    });
    if (miscursos.length > 0) {
        miscursos.forEach((curso)=> {
            const template = `
                <li class="collection-item">
                    <div id="imagenes">
                        <img class="Imagen" src="${curso.Imagen}">
                    </div>
                    <div id="texto">
                        <p class="descripcion">${curso.descripcion}</p>
                    </div>
                </li>
            `;
            $("#myProducts").append(template);
        });
    }
}