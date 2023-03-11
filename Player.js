/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,    //Tamaño proporcional
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2, //Centra el juagdor en la pantalla
            y = game.height - height,       //Para que se ponga a ras del suelo
            speed = PLAYER_SPEED,           //Velocidad
            myImageSrc = PLAYER_PICTURE,    //imagen
            myImageDeadSrc = PLAYER_PICTURE_DEAD;   //Imagen de cuando esta muerto

        super(game, width, height, x, y, speed, myImageSrc, myImageDeadSrc);
        this.lives = PLAYER_INITIAL_LIVES;  //LE PONGO LAS VIDAS INICIALES AL CONSTRUIR EL PALYER
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {     //Veo que tecla esta pulsada
            case KEY_LEFT:                      //Para la izquierda resto
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:                     //Para la derecha sumo
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:                     //Barra espaciadora dispara
                this.game.shoot(this);
                break;
            }
        }
    }

    /**                             //Si no estoy muerto ya, llamo al metodo collide del metodo
     * Mata al jugador              //del que estoy heredando (Character), y ademas después de
     */                             //2 segundos con la imagen de muerto, sale el cartelito de game over.
    collide() {                         
        if (!this.dead) {               
            this.lives--; //RESTO UNA VIDA PORQUE ME HAN MATADO
            setTimeout(() => {    
                if (this.lives === 0) {     //SI NO ME QUEDAN VIDAS,
                    this.game.endGame();    //TERMINO EL JUEGO.
                } else {                    //SI ME QUEDAN VIDAS,
                    this.dead = false;      //RESUCITO PONIENDO QUE NO ESTOY MUERTO
                    this.image.src = this.myImageSrc;   //Y LE PONGO LA IMAGEN DE VIVO
                }
            }, 2000);
            super.collide();
        }
    }
}