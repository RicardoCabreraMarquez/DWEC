var paises = [
        {
            "pais" : "España",
            "capital" : "Madrid"
        },
        {
            "pais" : "Alemania",
            "capital" : "Berlín"
        },
        {
            "pais" : "Albania",
            "capital" : "Tirana"
        },
        {
            "pais" : "Andorra",
            "capital" : "Adorra la Vella"
        },
        {
            "pais" : "Francia",
            "capital" : "Paris"
        },
        {
            "pais" : "Reino Unido",
            "capital" : "Londres"
        },
        {
            "pais" : "Bélgica",
            "capital" : "Bruselas"
        },
        {
            "pais" : "Croacia",
            "capital" : "Zagreb"
        },
        {
            "pais" : "Dinamarca",
            "capital" : "Copenhage"
        },
        {
            "pais" : "Eslovaquia",
            "capital" : "Bratislava"
        },
        {
            "pais" : "Estonia",
            "capital" : "Tallin"
        },
        {
            "pais" : "Finlandia",
            "capital" : "Helsinki"
        },
        {
            "pais" : "Italia",
            "capital" : "Roma"
        },
        {
            "pais" : "Luxemburgo",
            "capital" : "Luxemburgo"
        },
        {
            "pais" : "Monáco",
            "capital" : "Moncáco"
        },
        {
            "pais" : "Países Bajos",
            "capital" : "Ámsterdam"
        },
        {
            "pais" : "Polonia",
            "capital" : "Varsovia"
        },
        {
            "pais" : "Portugal",
            "capital" : "Lisboa"
        }
    ]

    let tablas = document.getElementById("tabla");

    let generarTabla = '';

    generarTabla += `<tr><td id="principal">Capital</td><td id="principal">Pais</td></tr>`;

    for (x of paises) {
        generarTabla += `<tr><td>${x.capital}</td><td>${x.pais}</td</tr>`
    }

    tablas.innerHTML += generarTabla;
