import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Nunito']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')


   game.load.image('sky', './assets/images/sky.png');
   game.load.image('ground', './assets/images/platform.png');
   game.load.image('star', './assets/images/star.png');
   game.load.image('diamond', './assets/images/diamond.png');
   game.load.image('firstaid', './assets/images/firstaid.png');
   game.load.spritesheet('dude', './assets/images/dude.png', 32, 48);

  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true;
  }

}
