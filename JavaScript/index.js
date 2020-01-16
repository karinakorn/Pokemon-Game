var dibujante = new Dibujante();
dibujante.dibujarPokemon();

$(window).on("load", function () {
    _Controlador.pokemonRandom(0, 12)
})