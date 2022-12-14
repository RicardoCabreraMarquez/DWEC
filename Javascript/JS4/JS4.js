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
  var error = document.getElementById('error');

  xhr.addEventListener("readystatechange", function() {
    try{
      if(this.readyState === 4) {
        error.innerHTML = ``;
        response = JSON.parse(this.responseText);
        sprite.innerHTML = `<img src="${response.sprites.front_default}">`;
        nombre.innerHTML = response.name;
        height.innerHTML = response.height;
        weight.innerHTML = response.weight;
       
        version.innerHTML = "";
        for(let i = 0; i<response.game_indices.length;i++){
          version.innerHTML += `${response.game_indices[i].version.name}<br>`;
        }

        type.innerHTML = "";
        for (let i = 0; i < response.types.length; i++) {
          type.innerHTML += `${response.types[i].type.name}<br>`;
        }
      }
    }catch(err){
      nombre.innerHTML = "";
      sprite.innerHTML = "";
      height.innerHTML = "";
      weight.innerHTML = "";
      version.innerHTML = "";
      type.innerHTML = "";
      error.innerHTML = `<td colspan="6"> No se encuentra el pokemon</td>`;
    }
  });
  
  xhr.open(`GET`, `https://pokeapi.co/api/v2/pokemon/${texto}`);
  
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true'); 
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.send();
}