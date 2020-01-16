class Controlador {
    // constructor(dibujante){
    //     this.dibujante = dibujante
    // }
    turnos = () => {

    }
    pokemonRandom = (min, max) => {
        var pokemonRandom = parseInt(Math.random() * (max - min) + min);
        console.log(pokemonRandom)
        dibujante.dibujarPokemonRandom(pokemonRandom)
    }
}



// VER TEMA RANDOM


//REVERRR !!!!!!!!!!!!!

function dropMenu(element, hide = false) {
    if (!!!hide) {
        document.getElementById(element).classList.add("active");
    } else {
        document.getElementById(element).classList.remove("active");
    }

}

document.getElementById("elegir-pokemon").addEventListener("mouseover", function () {
    dropMenu("menu-pokemon");
});
document.getElementById("elegir-ataque").addEventListener("mouseover", function () {
    dropMenu("menu-ataque");
});

var menupoke, menuataq;

document.getElementById("elegir-pokemon").addEventListener("mouseout", function () {
    menupoke = setTimeout(function () {
        dropMenu("menu-pokemon", true);
    }, 1000)
});

document.getElementById("elegir-ataque").addEventListener("mouseout", function () {
    menuataq = setTimeout(function () {
        dropMenu("menu-ataque", true);
    }, 1000)
});

document.getElementById("menu-pokemon").addEventListener("mouseenter", function () {
    clearTimeout(menupoke);
});
document.getElementById("menu-ataque").addEventListener("mouseenter", function () {
    clearTimeout(menuataq);
});

// document.getElementById("elegir-pokemon ul").addEventListener("mouseout", function () {
//     menupoke = setTimeout(function () {
//         dropMenu("menu-pokemon", true);
//     }, 1000)
// });

// document.getElementById("elegir-ataque ul").addEventListener("mouseout", function () {
//     menuataq = setTimeout(function () {
//         dropMenu("menu-ataque", true);
//     }, 1000)
// });

const _Controlador = new Controlador()