class Controlador {
    // constructor(dibujante){
    //     this.dibujante = dibujante
    // }
    configurarBotonesAtaque = () => {
        var ataque1 = $("#atk1");
        var ataque2 = $("#atk2");
        var contexto = this;

        ataque1.click(function() {
            contexto.atacar(0);
        })
        ataque2.click(function() {
            contexto.atacar(1);
        })

    }
    atacar = (numeroDeAtaque) => {
        var ataqueEnemigo = Math.floor(Math.random() * 2)
        enemigo.vidas -= jugador.ataques[numeroDeAtaque].potencia;
        jugador.vidas -= enemigo.ataques[numeroDeAtaque].potencia;
        this.ganar();

    }
    ganar = () => {
        if (enemigo.vidas <= 0) {
            return alert("You win");
        } else if (jugador.vidas <= 0) {
            return alert("You loose");
        }
    }
    pokemonRandom = (min, max) => {
        var pokemonRandom = parseInt(Math.random() * (max - min) + min);
        return new Pokemon(listaPokemon[pokemonRandom])
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

document.getElementById("elegir-pokemon").addEventListener("mouseover", function() {
    dropMenu("menu-pokemon");
});
document.getElementById("elegir-ataque").addEventListener("mouseover", function() {
    dropMenu("menu-ataque");
});

var menupoke, menuataq;

document.getElementById("elegir-pokemon").addEventListener("mouseout", function() {
    menupoke = setTimeout(function() {
        dropMenu("menu-pokemon", true);
    }, 1000)
});

document.getElementById("elegir-ataque").addEventListener("mouseout", function() {
    menuataq = setTimeout(function() {
        dropMenu("menu-ataque", true);
    }, 1000)
});

document.getElementById("menu-pokemon").addEventListener("mouseenter", function() {
    clearTimeout(menupoke);
});
document.getElementById("menu-ataque").addEventListener("mouseenter", function() {
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