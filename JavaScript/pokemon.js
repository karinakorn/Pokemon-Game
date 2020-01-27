class Pokemon {
    constructor(datos) {
        this.id = datos.id;
        this.img = datos.img;
        this.ataques = datos.ataques;
        this.tipo = datos.propriedades.tipo;
        this.debilidad = datos.propriedades.debilidad;
        this.vidas = datos.propriedades.vidas;

    }

}