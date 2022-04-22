class Cloud extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.speed = 3;
    }

    update() {
        //move clouds left
        this.x -= this.speed;

        //wrap around screen
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}