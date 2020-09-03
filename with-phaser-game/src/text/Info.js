import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor({game, x, y, text, fontStyle}) {
    super(game, x, y, text, fontStyle);
    this.game = game;
  }
}
