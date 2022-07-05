 const listaPersonajes = [
    {
        id: 4 , 
        nombre: `Charmander` ,
        categoria: `Lagartija`,
        tipo: `fuego`,
        ataque: 400,
        defensa: 300,
        ataqueEspecial: 400,
        defensaEspecial: 300,
        debilidad: `Agua`-`tierra`-`Roca`,
        vida: 10000,
    },
    {
        id: 25 , 
        nombre: `Pikachu` ,
        categoria: `Ratón`,
        tipo: `eléctrico`,
        ataque: 400,
        defensa: 300,
        ataqueEspecial: 300,
        defensaEspecial: 300,
        debilidad: `Tierra`,
        vida: 11000,
    },
    {
        id: 39 , 
        nombre: `Jigglypuff` ,
        categoria: `Globo`,
        tipo: `Normal`,
        ataque: 300,
        defensa: 200,
        ataqueEspecial: 300,
        defensaEspecial: 200,
        debilidad: `Acero`-`Veneno`,
        vida: 9000,
    },
]

let contenedorPersonajes = document.getElementById("contenedor_personajes")

for (const personaje of listaPersonajes){
    let columna = document.createElement("div")
    columna.className = "col-md-4 mt-3"
    columna.id = `columna_${personaje.id}`
    columna.innerHTML =`
        <div class="card">
            <div class="card_body">
                <p class="card_text">Nombre: ${personaje.nombre}</p>
                <p class="card_text">Categoría: ${personaje.categoria}</p>
                <p class="card_text">Tipo: ${personaje.tipo}</p>           
            </div>
        </div>
        `
    contenedorPersonajes.append (columna)
}

const pers = []

let textoAtaque = 0
let textoDefensa = 0
let contenedorTuPersonaje

class TuPersonaje {
    constructor(nombre, categoria, tipo, numero){
        this.nombre = nombre.toUpperCase()
        this.categoria = categoria
        this.tipo = tipo
        this.numero = numero
    }

    calcularAtaque = () => this.numero * 7.5
    calcularDefensa = () => this.numero * 6.4

}
function inicializarElementos(){
    contenedorTuPersonaje = document.getElementById("contenedor_tu_personaje")
}

function ingresarPersonaje (){
    let nombre = prompt("Ingrese el nombre de su personaje")
    let categoria = prompt("Ingrese la categoria de su personaje")
    let tipo = prompt("Ingrese el tipo de su personaje")
    let numero = parseInt(prompt("Ingrese un numero entre 1 y 4"))

    let miPersonaje = new TuPersonaje (nombre, categoria, tipo, numero)

    pers.push (miPersonaje)
}



function agregarPersonajeCard (){
    for (const personaje of pers) {
        let columna = document.createElement("div")
        columna.className = "col-md-4 mt-3"
        columna.innerHTML =`
            <div class="card">
                <div class="card_body">
                    <p class="card_text">Nombre: ${personaje.nombre}</p>
                    <p class="card_text">Categoría: ${personaje.categoria}</p>
                    <p class="card_text">Tipo: ${personaje.tipo}</p>
                    <p class="card_text">Ataque: ${pers.calcularAtaque}</p>
                    <p class="card_text">Defensa: ${pers.calcularDefensa}</p>           
                </div>
            </div>
            `
        contenedorTuPersonaje.append (columna)
    }

}

function main(){
    inicializarElementos()
    ingresarPersonaje()
    agregarPersonajeCard()
}

main()


