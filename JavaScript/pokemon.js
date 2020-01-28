class Pokemon {
    constructor(datos) {
        this.id = datos.id;
        this.img = datos.img;
        this.ataques = datos.ataques;
        this.tipo = datos.propiedades.tipo;
        this.debilidad = datos.propiedades.debilidad;
        this.vidas = datos.propiedades.vidas;

    }

}