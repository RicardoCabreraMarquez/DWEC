//alert('hola Quiliano')

let nombre = "Quiliano";
let altura = 150;

let concatenacion = nombre + " " + altura;

let datos = document.getElementById("datos");

datos.innerHTML = `
<h2>Mi nombre es -> ${nombre}</h2>
<h3>y mido ${altura}</h3>
`;

if (altura >= 160) {
    datos.innerHTML += `<h1>Eres muy ALTO</h1>`;
}else {
    datos.innerHTML += `<h1>Eres muy BAJITO</h1>`;
}

for(let i = 1990; i<=1992; i++){
    datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`;
}

function muestraMiNombre(nombre, altura){
    let datos = document.getElementById("datos")

    datos.innerHTML += `
    <h2>Mi nombre es -> ${nombre}</h2>
    <h3>y mido ${altura}</h3>
    `;
}

muestraMiNombre("Andrea", 120)