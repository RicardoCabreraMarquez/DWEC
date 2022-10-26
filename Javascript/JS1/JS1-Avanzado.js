let tablas = document.getElementById("tabla");

let tabla = new Array(2);
tabla[0] = new Array(5);
tabla[1] = new Array(6);


for (let i = 0; i<tabla[i].lenght;i++) {
    tablas.innerHTML += `<tr></tr>`;
    for(let j=0; j<tabla[i][j].lenght; j++) {
        tablas.innerHTML += `<td>T ${i} C ${j}</td>`;
    }
}


