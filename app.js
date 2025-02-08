// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de participantes
const participantes = [];

// Referencias a elementos del DOM
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


function agregarAmigo() {
  const nombre = inputNombre.value.trim();

  if (!nombre) {
    alert("Por favor, escribe un nombre válido.");
    return;
  }
  if (participantes.includes(nombre)) {
    alert("El nombre ya está en la lista.");
    return;
  }

  participantes.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  inputNombre.value = "";
}

function sortearAmigo() {
  if (participantes.length < 2) {
    alert("Debes añadir al menos 2 participantes para realizar el sorteo.");
    return;
  }

  resultado.innerHTML = "";

  const nombresRestantes = [...participantes];
  const asignados = new Map();

  for (let participante of participantes) {
  
    const posibles = nombresRestantes.filter((n) => n !== participante);

   
    if (posibles.length === 0) {
      alert("No se pudo completar el sorteo. Intenta de nuevo.");
      resultado.innerHTML = "";
      return;
    }

    const indexAleatorio = Math.floor(Math.random() * posibles.length);
    const amigoSecreto = posibles[indexAleatorio];

    asignados.set(participante, amigoSecreto);

    nombresRestantes.splice(nombresRestantes.indexOf(amigoSecreto), 1);
  }

  asignados.forEach((amigoSecreto, participante) => {
    const li = document.createElement("li");
    li.textContent = `${participante} → ${amigoSecreto}`;
    resultado.appendChild(li);
  });
}