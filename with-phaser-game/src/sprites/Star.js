import Phaser from 'phaser'

export default class Star extends Phaser.Sprite{
    constructor({game, x, y, asset}){
       super(game, x, y, asset);

       this.game = game;
    }
}
