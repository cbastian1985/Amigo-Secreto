// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let input = document.getElementById ("amigo");
    let nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)){
        amigos.push(nombre);

        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li"); 
        nuevoElemento.textContent = nombre;
        nuevoElemento.classList.add("list-item");
        lista.appendChild(nuevoElemento);

        input.value = "";
    } else {
        alert ("Error, Ingresa un nombre que no este repetido.");
    }
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert("Debes ingresar minimo 2 amigos para sortear");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let mezclar = [...amigos].sort(() => Math.random() - 0.5);
    let asignaciones = [];

    for (let i = 0; i < mezclar.length; i++){
        let amigo1 = mezclar[i];
        let amigo2 = mezclar[(i + 1) % mezclar.length];
        asignaciones.push(`${amigo1} 👉 ${amigo2} `);
    }

    asignaciones.forEach(asignacion => {
        let li = document.createElement("li");
        li.textContent = asignacion;
        resultado.appendChild(li);
    })
}