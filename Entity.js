/**
 * Cada uno de los elementos del juego
 */
class Entity {
    /**
     * Inicializa un elemento del juego
     * @param game {Game} La instancia del juego al que pertenece el elemento
     * @param width {Number} Ancho del elemento
     * @param height {Number} Alto del elemento
     * @param x {Number} Posición horizontal del elemento
     * @param y {Number} Posición vertical del elemento
     * @param speed {Number} Velocidad del elemento
     * @param myImageSrc {String} Ruta de la imagen del elemento
     */
    constructor (game, width, height, x, y, speed, myImageSrc) {    //juego, ancho, alto, pos pantalla x (inicia esquina izq), pos pantalla y (inicio arriba), velocidad, imagenes
        this.game = game;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.myImageSrc = myImageSrc;
        this.image = new Image();
        this.image.src = this.myImageSrc;
        this.image.className =  this.constructor.name;
        this.image.style.position = "absolute"; //posiciones relativas al elemento padre
        this.image.style.height = this.height === "auto" ? "auto" : `${this.height}px`; //HAY QUE ESPECIFICAR px
        this.image.style.width = this.width === "auto" ? "auto" : `${this.width}px`;    //HAY QUE ESPECIFICAR px
        this.image.style.top = `${this.y}px`;
        this.image.style.left = `${this.x}px`;
        document.body.appendChild(this.image);
    }

    /**
     * Actualiza la posición del elemento en la pantalla
     */
    render () {     //Para pintar la pantalla con los nuevos elementos
        this.image.style.top = `${this.y}px`;
        this.image.style.left = `${this.x}px`;
    }
}