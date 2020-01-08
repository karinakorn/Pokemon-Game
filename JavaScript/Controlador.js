class Controlador {
    turnos = () => {

    }
}

//REVERRR !!!!!!!!!!!!!

function dropMenu(element) {
    document.getElementById(element).classList.toggle("active");
}

document.getElementById("elegir-pokemon").addEventListener("mouseover", function(){
    dropMenu("menu-pokemon");
});
document.getElementById("elegir-ataque").addEventListener("mouseover", function(){
    dropMenu("menu-ataque");
});

var menupoke, menuataq;
document.getElementById("elegir-pokemon").addEventListener("mouseout", function(){
    menupoke = setTimeout(function(){
        dropMenu("menu-pokemon");
    }, 1000)
});
document.getElementById("elegir-ataque").addEventListener("mouseout", function(){
    menuataq = setTimeout(function(){
        dropMenu("menu-ataque");
    }, 1000)
});

document.getElementById("menu-pokemon").addEventListener("mouseenter", function(){
    clearTimeout(menupoke);
});
document.getElementById("menu-ataque").addEventListener("mouseenter", function(){
    clearTimeout(menuataq);
});
