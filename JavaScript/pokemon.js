class Pokemon {
    constructor (id, alto, ancho, imagen, tipo, ataques, debilidad, fortaleza, vidas) {
      this.id = id;
      this.alto = alto;
      this.ancho = ancho;
      this.imagen = imagen;
      this.tipo = tipo;
      this.ataques = [ataques]
      this.debilidad = debilidad;
      this.fortaleza = fortaleza;
      this.vidas = vidas
    }
}

class Ataque {
    constructor (nombre, potencia, cantidadDeUsos){
        this.nombre = nombre;
        this.potencia = potencia;
        this.cantidadDeUsos = cantidadDeUsos;
    }
}