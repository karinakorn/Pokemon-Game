class Controlador {
    // constructor(dibujante){
    //     this.dibujante = dibujante
    // }
    configurarBotonesAtaque = () => {
        var ataque1 = $("#atk1");
        var ataque2 = $("#atk2");
        var contexto = this;

        ataque1.click(() => {
            contexto.atacar(0);
        })
        ataque2.click(() => {
            contexto.atacar(1);
        })

        return this;
    }
    atacar(numeroDeAtaque) { //Funcion atacar
        jugador.vidas -= enemigo.ataques[numeroDeAtaque].potencia;
        document.querySelector(".player-life-bar").value = jugador.vidas

        var ataqueEnemigo = Math.floor(Math.random() * 2)
        enemigo.vidas -= jugador.ataques[ataqueEnemigo].potencia;
        document.querySelector(".enemy-life-bar").value = enemigo.vidas

        if (jugador.vidas < 1) {
            alert("You loose")
        } else if (enemigo.vidas < 1) {
            alert("You win")
        }
        return this;
    }
    ganar = () => {
        return this;
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