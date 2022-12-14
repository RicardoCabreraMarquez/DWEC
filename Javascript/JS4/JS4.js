var response;
var xhr = new XMLHttpRequest();

function buscar(){
  const nombrepokemon = document.getElementById('myInput');

  var texto = nombrepokemon.value;

  console.log(texto);

  var sprite = document.getElementById('sprite');
  var nombre = document.getElementById('name');
  var height = document.getElementById('height');
  var weight = document.getElementById('weight');
  var version = document.getElementById('version');
  var type = document.getElementById('type');

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      response = JSON.parse(this.responseText);
      sprite.innerHTML = `<img src="${response.sprites.front_default}">`;
      nombre.innerHTML = response.name;
      height.innerHTML = response.height;
      weight.innerHTML = response.weight;
      type.innerHTML = response.types[0].type.name;
      version.innerHTML = "";
      for(let i = 0; i<response.game_indices.length;i++){
        console.log(response.game_indices[i].version.name)
         version.innerHTML += `${response.game_indices[i].version.name}<br>`;
      }
      
      
    }
  });
  
  xhr.open(`GET`, `https://pokeapi.co/api/v2/pokemon/${texto}`);
  
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true'); 
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.send();
}