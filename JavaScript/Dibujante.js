class Dibujante {
    dibujarPokemon() {
        listaPokemon.forEach(poke => {
            let pokemonDOM = document.createElement('li');
            pokemonDOM.setAttribute('class', 'sprite');
            pokemonDOM.setAttribute('data-pokemon', poke.name);
            pokemonDOM.style.backgroundImage = "url('" + poke.img.front + "')";
            pokemonDOM.addEventListener('click', function () {});
            container.append(pokemonDOM)
        })
    }
    dibujarPokemonRandom(id) {
        document.querySelector("#enemigo .imagen-pokemon img").setAttribute("src", listaPokemon[id].img.front);
    }
}
const container = document.querySelector('#menu-pokemon ul');