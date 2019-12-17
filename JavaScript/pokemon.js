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