/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Star from '../sprites/Star'
import Sky from '../sprites/Sky'
import Player from '../sprites/Player'
import FirstAid from '../sprites/FirstAid'
import Info from '../text/Info'

import {setResponsiveWidth} from '../utils'
//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
export default class extends Phaser.State {

  init () {
  }
  preload () {}

  update () {
    //  Collide the player and the stars with the platforms
    let hitPlatform = game.physics.arcade.collide(this.player, this.platforms);
    this.game.physics.arcade.collide(this.stars, this.platforms);
    this.game.physics.arcade.collide(this.diamonds, this.platforms);
    this.game.physics.arcade.collide(this.firstaid, this.platforms);

    // As well as doing this we will also check to see if the player overlaps with a star or not:
    this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
    this.game.physics.arcade.overlap(this.player, this.diamonds, this.collectDiamond, null, this);
    this.game.physics.arcade.overlap(this.player, this.firstaid, this.consumeFirstAid, null, this);

    //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -150;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 150;

        this.player.animations.play('right');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform)
    {
        this.player.body.velocity.y = -350;
    }
  }

  create () {
    this.cursors = game.input.keyboard.createCursorKeys();

    let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Phaser + ES6 + Webpack');
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.anchor.setTo(0.5);

    this.score = 0;
    this.infoText =  new Info({
        game: this.game, x: 16, y: 16, text: 'score: 0, health: 100', fontStyle: { fontSize: '32px', fill: '#000' }
    });

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'mushroom'
    });

    this.sky = new Sky({
      game: this.game,
      x: 0,
      y: 0,
      asset: 'sky'
    });

    this.player = new Player({
      game: this.game,
      x: 32,
      y: this.game.world.height - 150,
      asset: 'dude'
    });

    this.firstaid = new FirstAid({
      game: this.game,
      x: 10,
      y: 0,
      asset: 'firstaid'
    });

    // set the sprite width to 30% of the game width
    setResponsiveWidth(this.mushroom, 30, this.game.world)
    this.game.add.existing(this.mushroom)
    // this.game.add.sprite(0, 0, 'star');

    //  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //
    // //  A simple background for our game
    this.game.add.existing(this.sky)

    // //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = game.add.group();
    //
    // //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;
    //
    // // Here we create the ground.
    let ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
    //
    // //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);
    //
    // //  This stops it from falling away when you jump on it
    ground.body.immovable = true;
    //
    // //  Now let's create two ledges
    let ledge = this.platforms.create(400, 400, 'ground');
    //
    ledge.body.immovable = true;
    //
    ledge = this.platforms.create(-150, 250, 'ground');
    //
    ledge.body.immovable = true;

    // The player and its settings
   this.game.add.existing(this.player);
   this.game.add.existing(this.firstaid);

    //
    // //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);
    this.game.physics.arcade.enable(this.firstaid);
    this.firstaid.body.bounce.y = 0.2;
    this.firstaid.body.gravity.y = 300;

    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;
    this.player.maxHealth = 100;
    this.player.health = 100;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.stars = game.add.group();

    this.stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (let i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        let star = this.newStar(i);

        this.stars.add(star);

        //  Let gravity do its thing
        star.body.gravity.y = 100;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.3 + Math.random() * 0.2;
    }

    this.diamonds = game.add.group();

    this.diamonds.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (let i = 5; i < 11; i++)
    {
        //  Create a star inside of the 'stars' group
        let diamond = this.newDiamond(i);

        this.diamonds.add(diamond);

        //  Let gravity do its thing
        diamond.body.gravity.y = 100;

        //  This just gives each star a slightly random bounce value
        diamond.body.bounce.y = 0.3 + Math.random() * 0.2;
    }


    game.add.existing(this.infoText);
  }

  collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    this.score++;
    this.infoText.text = `score: ${this.score} health: ${this.player.health}`;
    // this.get
  }

  collectDiamond (player, diamond) {

    // Removes the star from the screen
    diamond.kill();

    this.score+=2;
    this.infoText.text = `score: ${this.score} health: ${this.player.health}`;
    // this.get
  }

  consumeFirstAid(player, firstaid){
     alert(`Player consumded first aid with: ${firstaid.healing} amount`);
      player.heal(firstaid.healing);
      firstaid.kill();
  }

  newStar(i) {
    return new Star(
      {
        game: this.game,
        x: i * 90,
        y: 0,
        asset: 'star'
      }
    );
  }


  newDiamond(i) {
      return new Star(
        {
          game: this.game,
          x: i * 70,
          y: 0,
          asset: 'diamond'
        }
      );
    }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
