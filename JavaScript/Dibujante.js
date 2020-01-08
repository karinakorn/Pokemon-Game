class Dibujante {
    dibujarPokemon() {
        listaPokemon.forEach(poke => {
            let pokemonDOM = document.createElement('li');
            pokemonDOM.setAttribute('class', 'sprite');
            pokemonDOM.setAttribute('data-pokemon', poke.name);
            pokemonDOM.style.backgroundImage = "url('" + poke.img.front + "')";
            pokemonDOM.addEventListener('click', function () {
                console.log(this.getAttribute('data-pokemon'))
            });
            container.append(pokemonDOM)
        })
    }
}
const container = document.querySelector('#menu-pokemon ul');