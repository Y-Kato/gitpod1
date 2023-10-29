const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('star', 'https://labs.phaser.io/assets/sprites/star.png');
}

function create() {
    this.add.text(400, 300, 'Hello Phaser!', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
    this.add.image(400, 400, 'star');
}

function update() {
}
