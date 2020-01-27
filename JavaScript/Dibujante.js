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
    dibujarEnemigo(pokemon) {
        document.querySelector("#enemigo .imagen-pokemon img").setAttribute("src", pokemon.img.front);
    }
    dibujarJugador(pokemon) {
        document.querySelector("#jugador .imagen-pokemon img").setAttribute("src", pokemon.img.back);
    }
}
const container = document.querySelector('#menu-pokemon ul');