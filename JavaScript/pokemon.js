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
        name: "abra",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/abra.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/abra.png"
        },
        ataques: {
            0: "mentalismo",
            1: "psiquico"

        },
        propriedades: {
            tipo: "psiquico",
            debilidad: "fantasma",
            vidas: 1000
        },
    },
    {
        name: "Charmander",
        img: {
            "front": "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/charmander.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/charmander.png"
        },
        ataques: {
            0: "lanzallamas",
            1: "llamarada"
        },
        propriedades: {
            tipo: "fuego",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        name: "Machop",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/machop.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/machop.png"
        },
        ataques: {
            0: "golpePuño",
            1: "patada"
        },
        propriedades: {
            tipo: "roca",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        name: "Lapras",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/lapras.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/lapras.png"
        },
        ataques: {
            0: "rayoHielo",
            1: "placaje"
        },
        propriedades: {
            tipo: "hielo",
            debilidad: "fuego",
            vidas: 1000
        }
    },
    {
        name: "Pidgey",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/pidgey.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/pidgey.png"
        },
        ataques: {
            0: "tornado",
            1: "ataqueAla"
        },
        propriedades: {
            tipo: "volador",
            debilidad: "hielo",
            vidas: 1000
        }
    },
    {
        name: "Mankey",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/mankey.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/mankey.png"
        },
        ataques: {
            0: "golpePuño",
            1: "patada"
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        }
    },
    {
        name: "Squirtle",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/squirtle.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/squirtle.png"
        },
        ataques: {
            0: "lanzaAgua",
            1: "burbujas"
        },
        propriedades: {
            tipo: "agua",
            debilidad: "normal",
            vidas: 1000
        }
    },
    {
        name: "Jigglypuff",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/jigglypuff.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/jigglypuff.png"
        },
        ataques: {
            0: "cantar",
            1: "placaje"
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        },
    },
    {
        name: "Zubat",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/zubat-f.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/zubat-f.png"
        },
        ataques: {
            0: "eco",
            1: "ataqueAla"
        },
        propriedades: {
            tipo: "volador",
            debilidad: "hielo",
            vidas: 1000
        }
    },
    {
        name: "Geodude",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/geodude.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/geodude.png"
        },
        ataques: {
            0: "golpePuño",
            1: "placaje"
        },
        propriedades: {
            tipo: "roca",
            debilidad: "agua",
            vidas: 1000
        }
    },
    {
        name: "Gastly",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/gastly.png",
            "back": "https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/gastly.png"
        },
        ataques: {
            0: "pesadilla",
            1: "asustar"
        },
        propriedades: {
            tipo: "fantasma",
            debilidad: "normal",
            vidas: 1000
        }
    },
    {
        name: "Mew",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/mew.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/mew.png"
        },
        ataques: {
            0: "rayo",
            1: "mentalismo"
        },
        propriedades: {
            tipo: "normal",
            debilidad: "volador",
            vidas: 1000
        }
    },
    {
        name: "Psyduck",
        img: {
            "front": "https://img.pokemondb.net/sprites/black-white/normal/psyduck.png",
            "back": "https://img.pokemondb.net/sprites/black-white/back-normal/psyduck.png"
        },
        ataques: {
            0: "especial",
            1: "placaje",
        },
        propriedades: {
            tipo: "psiquico",
            debilidad: "null",
            vidas: 2000
        }
    }

];