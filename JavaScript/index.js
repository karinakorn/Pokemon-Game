var mentalismo = new Ataque("mentalismo", "fantasma", 300, 5);
var psiquico = new Ataque("psiquico", "psiquico", 300, 5);



var dibujante = new Dibujante();
dibujante.dibujarPokemon();

$(window).on("load", function () {
    _Controlador.pokemonRandom(0, 12)
})