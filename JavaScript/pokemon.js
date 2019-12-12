class Pokemon {
    constructor (id, alto, ancho, imagen, ataques, debilidad, vidas) {
      this.id = id;
      this.alto = alto;
      this.ancho = ancho;
      this.imagen = imagen;
      this.ataques = [ataques]
      this.debilidad = debilidad;
      this.vidas = vidas
    }
}

class Ataque {
    constructor (nombre, tipo, potencia, cantidadDeUsos){
        this.nombre = nombre;
        this.tipo = tipo;
        this.potencia = potencia;
        this.cantidadDeUsos = cantidadDeUsos;
    }
}