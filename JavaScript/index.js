var mentalismo = new Ataque("mentalismo", "psiquico", 3, 5);
var psyd = new Ataque("psyd", "psiquico", 3, 5);


var dormir = new Ataque("psyd", "psiquico", 3, 5);
var duck = new Ataque("duck", "psiquico", 3, 5);

var jugador1 = new Jugador("Player 1", [abra]);
var enemgio = new Jugador("Gary", [psyduck]);

var abra = new Pokemon(01, "https://img.pokemondb.net/sprites/black-white/normal/abra.png", [mentalismo, dormir], "psiquico",
    "fantasma", 10);

var psyduck = new Pokemon(02, "https://img.pokemondb.net/sprites/black-white/normal/psyduck.png", [psyd, duck], "psiquico", "fantasma", 10)

// JQUERY
$(document).ready {
    $(img).hide()
}