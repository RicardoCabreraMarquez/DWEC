## Programación Orientada a Objetos

> Tarea AVANZADA.

### Analisis del problema 👨‍🏫


#### He buscado el funcionamiento de los distintos metodos y su sintaxis: 

#### SetTimeout(): 
+ El método setTimeout() permite ejecutar un fragmento de código, una vez transcurrido un tiempo determinado. Puedes pensar en el método como una forma de establecer un temporizador para ejecutar código de JavaScript en un momento determinado.
<br></br>

### Sintaxis SetTimeout:

    
    setTimeout(function(){
        console.log("Hola Mundo");
    }, 2000);

    console.log("setTimeout() Ejemplo...");
    
<br></br>

#### onclick: 
+ El evento onclick en JavaScript te permite como programador, ejecutar una función cuando se le da clic a un elemento.
<br></br>

### Sintaxis onclick:

    
    <button onclick="miFunc()">Haz click</button>

    <script>
        function miFunc() {
    alert('Se ha dado clic al botón!');
    }
    </script>
    
<br></br>



### Diseño de la solución 📊

![UML](recursos/UML.png)
<br></br>

### Implementacion ⚒

He realizado el juego timbiriche.
<br></br>

### Pruebas 👨🏻‍💻

##### Prueba jugador1 ganador:

![GIF](recursos/prueba1.gif)

##### Prueba jugador2 ganador:

![GIF](recursos/prueba2.gif)

##### Prueba Empate:

![GIF](recursos/prueba3.gif)
