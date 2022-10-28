let tablas = document.getElementById("tabla");

let nombres = ['Quiliano', 'Manolito', 'Andreilla', 'Juanma', 'Paquito']

function generarDatos(altura, anchura){

    let generarTabla = '';

    for (let i = 0; i < altura;i++) {
        generarTabla += `<tr>`;
        for(let j = 0; j < anchura; j++) {
            generarTabla += `<td>${nombres[Math.floor(Math.random()*nombres.length)]}</td>`;
        }
        generarTabla += `</tr>`;
    }

    tablas.innerHTML += generarTabla;
}

generarDatos(3,3);


