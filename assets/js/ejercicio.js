let computadoras= document.getElementById('computadoras') //accedimos a la etiqueta por el id del html
// creamos los arreglos
const animals = ["Elefante", "Perro", "Tucan", "Perico", "Gato", "Tortuga", "Delfin", "Foca", "Lobo", "Ballena"];
const pcs = ["HP", "Mac", "Compaq", "Dell","Toshiba","Asus","Sony","LG","Apple","Gateway"]
const generation = ["Marco", "Tania", "Javier", "Adriana", "Braulio", "Tamara", "Felipe", "Cesar", "Pedro", "Rogelio"]


let computertBoton = document.getElementById('computerBoton')
computertBoton.addEventListener('click', function() { //creamos un evento llamdo click y hicimos una funcion anonima
    pcs.forEach((pc, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${pc}`;
        computadoras.appendChild(item);
      } );
})

let animales = document.getElementById('animales')

let animalesBoton = document.getElementById('animalesBoton')
animalesBoton.addEventListener('click', function() {
    animals.forEach((animal, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${animal}`;
        animales.appendChild(item);
      } );
})

let nombres = document.getElementById('nombres')

let nombresBoton = document.getElementById('nombresBoton')
nombresBoton.addEventListener('click', function() {
    generation.forEach((nombre, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1} ${nombre}`;
        nombres.appendChild(item);
      } );
})

// manera de resolverlo de carlos

const listAnimals = ["Elefante", "Perro", "Tucan", "Perico", "Gato", "Tortuga", "Delfin", "Foca", "Lobo", "Ballena"];
const listComputers = ["HP", "Mac", "Compaq", "Dell","Toshiba","Asus","Sony","LG","Apple","Gateway"]
const listPeople = ["Marco", "Tania", "Javier", "Adriana", "Braulio", "Tamara", "Felipe", "Cesar", "Pedro", "Rogelio"]
