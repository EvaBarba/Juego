
class Boss extends Opponent {

    constructor(game){
        super(game);
        this.speed = BOSS_SPEED;
        this.myImageSrc = BOSS_PICTURE;
        this.myImageDeadSrc = BOSS_PICTURE_DEAD;
        this.image.src = this.myImageSrc;   //Para que se refeleje en el HTML
    }
}
