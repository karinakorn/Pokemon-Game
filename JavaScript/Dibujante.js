class Dibujante {
    dibujarPokemon() {
        listaPokemon.forEach(poke => {
            let pokemonDOM = document.createElement('li');
            pokemonDOM.setAttribute('class', 'sprite');
            pokemonDOM.setAttribute('data-pokemon', poke.name);
            pokemonDOM.style.backgroundImage = "url('" + poke.img.front + "')";
            pokemonDOM.addEventListener('click', function() {});
            container.append(pokemonDOM)
        })
    }
    dibujarNombreAtaque(pokemon) {
        document.querySelector(".ataque1").innerHTML = pokemon.ataques["0"].nombre;
        document.querySelector(".ataque2").innerHTML = pokemon.ataques["1"].nombre;
    }
    dibujarEnemigo(pokemon) {
        document.querySelector("#enemigo .imagen-pokemon img").setAttribute("src", pokemon.img.front);
        document.querySelector(".nombre-enemy").innerHTML = pokemon.name;

    }
    dibujarJugador(pokemon) {
        document.querySelector("#jugador .imagen-pokemon img").setAttribute("src", pokemon.img.back);
        document.querySelector(".nombre-pokemon").innerHTML = pokemon.name;
    }
}
const container = document.querySelector('#menu-pokemon ul');