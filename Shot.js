/**
 * Disparo de un Character. Hereda de la clase Entity
 */
class Shot extends Entity {
    /**
     * Inicializa un disparo
     * @param game {Game} La instancia del juego al que pertenece el personaje
     * @param character {Character} Personaje del juego que lanza el disparo
     */
    constructor (game, character) {
        const width = SHOT_WIDTH * game.width / 100;    //Son porcentajes, los cuales los marcan SHOT_...
        const height = SHOT_HEIGHT * game.width / 100;
        const x = character.x + character.width / 2 - width / 2;    //Para que parezca que salga del personaje
        const y = character.y + character.height - character.height / 2;
        const speed = SHOT_SPEED;
        const myImageSrc = character instanceof Player ? SHOT_PICTURE_PLAYER : SHOT_PICTURE_OPPONENT;
        super(game, width, height, x, y, speed, myImageSrc);
        this.type = character instanceof Player ? "PLAYER" : "ENEMY"; // Tipo del personaje que lanza el disparo
    }
    /**
     * Actualiza los atributos de posición del disparo
     */
    update () { //Para que vaya avanzando, las balas solo van arriba o abajo, solo el eje y
        if (this.type === "PLAYER") { 
            this.y = this.y - this.speed; // Goes up; Se resta porque tiene que ir hacia arriba (el 0 está arriba)
        } else {
            this.y = this.y + this.speed; // Goes down
        }
        if (this.y < 0 || this.y > this.game.height) {
            this.game.removeShot(this);
            document.body.removeChild(this.image);
        }
    }
}