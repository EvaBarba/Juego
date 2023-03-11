/**
 * Monstruo al que tenemos que destruir
 */
class Opponent extends Character {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = OPPONENT_SPEED,
            myImageSrc = OPPONENT_PICTURE,
            myImageDeadSrc = OPPONENT_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImageSrc, myImageDeadSrc);
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));   //Entre 1 y 2,5 va a disparar una bala
    }

    /**
     * Crea un nuevo disparo
     */
    shoot () {
        if (!this.dead && !this.game.ended) {
            if (!this.game.paused) {
                this.game.shoot(this);
            }
            setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
        }
    }

    /**
     * Actualiza los atributos de posición del oponente
     */
    update () {     //Se mueve solo
        if (!this.dead && !this.game.ended) {
            this.y += this.speed;
            if (this.y > this.game.height) {
                this.y = 0;
            }
            if (this.direction === "R") { // Hacia la derecha
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                } else {
                    this.horizontalMov = 0;
                }
            } else if (this.x > this.speed) {
                this.x -= this.speed;
            } else {
                this.horizontalMov = 0;
            }
            this.horizontalMov -= this.speed;
            if (this.horizontalMov < this.speed) {
                this.horizontalMov = getRandomNumber(this.game.width / 2);
                this.direction = this.direction === "R" ? "L" : "R"; // Cambia de sentido (si se choca)
            }
        }
    }

    /**
     * Mata al oponente
     */   
    collide() {  //idem palyer, pero quitan el oponente en vez de salir game over

        if (!this.dead) {
            setTimeout(() => {
                this.game.removeOpponent();
            }, 2000);
            super.collide();
            this.game.score++;  //SUMO 1 A LA PUNTUACION
        }
    
    }
} 