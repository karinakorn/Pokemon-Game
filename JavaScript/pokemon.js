var lanzallamas = new Ataque("lanzallamas", "fuego", 300, 5);
var llamarada = new Ataque("llamarada", "fuego", 300, 5);
var golpePuño = new Ataque("golpePuño", "roca", 300, 5);
var patada = new Ataque("patada", "normal", 300, 5);
var rayoHielo = new Ataque("rayoHielo", "hielo", 300, 5);
var placaje = new Ataque("placaje", "normal", 300, 5);
var tornado = new Ataque("tornado", "volador", 300, 5);
var ataqueAla = new Ataque("ataqueAla", "volador", 300, 5);
var lanzaAgua = new Ataque("lanzaAgua", "agua", 300, 5);
var burbujas = new Ataque("burbujas", "agua", 300, 5);
var cantar = new Ataque("cantar", "normal", 300, 5);
var eco = new Ataque("eco", "volador", 300, 5);
var pesadilla = new Ataque("pesadilla", "fantasma", 300, 5);
var asustar = new Ataque("asustar", "fantasma", 300, 5);
var rayo = new Ataque("rayo", "normal", 300, 5);
var especial = new Ataque("especial", "normal", 2000, 5);
class Pokemon {
    constructor(id, imagen, ataques, tipo, debilidad, vidas) {
        this.id = id;
        this.imagen = imagen;
        this.ataques = [ataques];
        this.tipo = tipo;
        this.debilidad = debilidad;
        this.vidas = vidas;

    }
}
const listaPokemon = [{

        id: 0,
        name: "abra",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/abra.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/abra.png"
        },
        ataques: {
            0: mentalismo,
            1: psiquico

        },
        propriedades: {
            tipo: "psiquico",
            debilidad: "fantasma",
            vidas: 1000
        },
    },
    {
        id: 1,
        name: "Charmander",
        img: {
            "front": "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/charmander.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/charmander.png"
        },
        ataques: {
            0: lanzallamas,
            1: llamarada
        },
        propriedades: {
            tipo: "fuego",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        id: 2,
        name: "Machop",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/machop.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/machop.png"
        },
        ataques: {
            0: golpePuño,
            1: patada
        },
        propriedades: {
            tipo: "roca",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        id: 3,
        name: "Lapras",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/lapras.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/lapras.png"
        },
        ataques: {
            0: rayoHielo,
            1: placaje
        },
        propriedades: {
            tipo: "hielo",
            debilidad: "fuego",
            vidas: 1000
        }
    },
    {
        id: 4,
        name: "Pidgey",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/pidgey.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/pidgey.png"
        },
        ataques: {
            0: tornado,
            1: ataqueAla
        },
        propriedades: {
            tipo: "volador",
            debilidad: "hielo",
            vidas: 1000
        }
    },
    {
        id: 5,
        name: "Mankey",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/mankey.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/mankey.png"
        },
        ataques: {
            0: golpePuño,
            1: patada
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        }
    },
    {
        id: 6,
        name: "Squirtle",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/squirtle.png"
        },
        ataques: {
            0: lanzaAgua,
            1: burbujas
        },
        propriedades: {
            tipo: "agua",
            debilidad: "normal",
            vidas: 1000
        }
    },
    {
        id: 7,
        name: "Jigglypuff",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/jigglypuff.png"
        },
        ataques: {
            0: cantar,
            1: placaje
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        },
    },
    {
        id: 8,
        name: "Zubat",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/zubat-f.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/zubat-f.png"
        },
        ataques: {
            0: eco,
            1: ataqueAla
        },
        propriedades: {
            tipo: "volador",
            debilidad: "hielo",
            vidas: 1000
        }
    },
    {
        id: 9,
        name: "Geodude",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/geodude.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/geodude.png"
        },
        ataques: {
            0: golpePuño,
            1: placaje
        },
        propriedades: {
            tipo: "roca",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        id: 10,
        name: "Gastly",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/gastly.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/gastly.png"
        },
        ataques: {
            0: pesadilla,
            1: asustar
        },
        propriedades: {
            tipo: "fantasma",
            debilidad: "normal",
            vidas: 1000
        }
    },
    {
        id: 11,
        name: "Mew",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/mew.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/mew.png"
        },
        ataques: {
            0: rayo,
            1: mentalismo
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        }
    },


];