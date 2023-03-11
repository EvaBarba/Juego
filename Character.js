/**
 *  Cada uno de los personajes del juego, es decir, aquellos elementos que tienen “vida”.
 *  @extends Entity
 */
class Character extends Entity {
    /**
     * Inicializa un personaje
     * @param game {Game} La instancia del juego al que pertenece el personaje
     * @param width {Number} Ancho del personaje
     * @param height {Number} Alto del personaje
     * @param x {Number} Posición horizontal del personaje
     * @param y {Number} Posición vertical del personaje
     * @param speed {Number} Velocidad del personaje
     * @param myImageSrc {String} Ruta de la imagen del personaje
     * @param myImageDeadSrc {String} Ruta de la imagen del personaje cuando muere
     */
    constructor (game, width, height, x, y, speed, myImageSrc, myImageDeadSrc) {
        super(game, width, height, x, y, speed, myImageSrc);    //Asumo que me lo van a pasar en el contructor
        this.dead = false; // Indica si el personaje está vivo o muerto
        this.myImageDeadSrc = myImageDeadSrc;   //imagen cuando nos morimos
    }

    /**
     * Mata a un personaje
     */
    collide() {
        this.image.src = this.myImageDeadSrc;   //Pone la imagen de muerto
        this.dead = true;   //Pone el booleano de que esta muerto a true
    }
}

