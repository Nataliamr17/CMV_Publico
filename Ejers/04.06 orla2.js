let peliculas = []; // un array con un elemento por cada usuario del xml, será un array de arrays

function leerXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };
    xhr.open("GET", "https://nataliamr17.github.io/CMV_Publico/orla.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    var i;
    var peliNom; //usrNom
    var peliPie; //usrPsw
    var nombre = [];
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("elemento"); // aqui es donde cogemos el array porque hay varias etiquetas usuario
    // obtenemos algo asi como x=[{USR1},{USR2}...Lucia]

    let tabla = "<table><tr><th>-- PELICULAS --</th><th>-- URL --</th><th>-- AÑO --</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let peliNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let peliFoto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        let peliAño = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + peliNom + "</td><td>" + peliFoto + "</td><td>" + peliAño + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        nombre = [peliNom, peliFoto, peliAño];
        peliculas.push(nombre);
    }
    tabla += "</table>"
    document.getElementById("mensaje").innerHTML = tabla;

    // muestro en consola el array de usuarios registrados
    peliculas.forEach((nombre) => {
        nombre.forEach((datos) => {
            console.log(datos);
        });
    });
}

function mostrarFotos() {
    
    //  let items = xmlDoc.getElementsByTagName("elemento");
    let content = '<div class="caja">';

    for (let i = 0; i < peliculas.length; i++) {

        let name = peliculas[i][0];
        let path = peliculas[i][1];
        let pie = peliculas[i][2]
       
        content +=
            `<figure class="container">
                <img class="img" src="${path}">
                <div class="text">
                  <h3>${name}  ${pie}</h3>
                </div>
        
             </figure> `;
    }
    content += "</div>"
    document.getElementById("fotos").innerHTML = content;
    $('#mensaje').toggle();
}


