var width = 800;
var height = 600;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y:0},
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update 
        
        // ((fixed it.)) my update just  went blue and not sure why
    },
    scale: {
        parent: 'wormies-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
        // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scalemanager/
} 

var game = new Phaser.Game(config);

// var count = 60;
// var timer;
// timer = setTimeout(update, 1000);

var score = 0;
//collecting the rings and scoring it
var scoreText;
var wormSprite;
var ringSprite;



function preload ()
{
    this.load.image('worm', 'assets/wormS.png');
    this.load.image('ring','assets/rings.png');
}

function create ()
{

    wormSprite = this.physics.add.sprite(400,300,'worm');
    wormSprite.setCollideWorldBounds(true);
    
    ringSprite = this.physics.add.sprite(100,100,'ring');
    ringSprite.setCollideWorldBounds(true);

    this.physics.add.overlap(wormSprite, ringSprite, collectRing, null,this);
     // this being in the create now means it only does this rather than once than repeats - setup in p5 for example. 
}
    // this.physics.add.collider(wormSprite, ringSprite);
    // wormSprite = this.add.image(400,300, 'worm');// the vaules are the x/y coordoniates
    // this.add.image(100,100, 'ring');
    // clock = this.event('30seconds');

    //keycode.info
function update ()
{
    var cursors = this.input.keyboard.createCursorKeys()
    var scoreText = document.querySelector('#score');

    scoreText.innerHTML = score;

    if (cursors.left.isDown) {
        wormSprite.setVelocityX(-160);
        wormSprite.setVelocityY(0);

    }
    else if (cursors.right.isDown){
        wormSprite.setVelocityX(160);
        wormSprite.setVelocityY(0);
    }
    else if (cursors.down.isDown){
        wormSprite.setVelocityX(0);
        wormSprite.setVelocityY(160);
    }
    else if (cursors.up.isDown){
        wormSprite.setVelocityX(0);
        wormSprite.setVelocityY(-160);
    }
    // Something i tried to get it working - Have kept to enable you to see my steps 
    // document.addEventListener('keydown',(event) =>{
    //     if (event.code == 'ArrowUp'){
    //         wormSprite.y = wormSprite.y -0.05;
    //}
    //     else if (event.code == 'ArrowDown'){
    //         wormSprite.y = wormSprite.y +0.05;
    //}
    //     else if (event.code == 'ArrowLeft'){
    //         wormSprite.x = wormSprite.x -0.05;
    //}
    //     else if (event.code == 'ArrowRight'){
    //         wormSprite.x = wormSprite.x +0.05;
    //     }
    // });
    // if (collideWithRing === true){
            //  ring = new ring
    // }
        // document.addEventListener('collidedWithRing',(){
        //     if 
        // })
        // if (count > 0)
        // {
        //    show("#countdown").text(--count);
        //    timer = setTimeout(update, 1000);
        // }
        // else
        // {
        //     alert("Finished");
        // }
}
function collectRing(wormSprite, ringSprite){
    var ringX = Math.floor(Math.random()*width)
    var ringY = Math.floor(Math.random()*height)

    ringSprite.setPosition(ringX, ringY);

    score += 10;
    console.log(score)
    // taking the current score and adding 10 to it.
}
// A few things i had tried to get it working -
// @method collideWithRing
// function collideWithRing()
// {   
//     // Phaser.Events.EventEmitter('ring')
// }
 // if (wormSprite == 'ring'){
    //     ring 
    // }
  //document.getElementById('ring', (event) =>{
        //if(e)
    //})
    //db.collection('Ring').doc().set({ 
    //}).then(()=>{
        //location.reload();
        // document.addEventListener('', (event) =>{
        //     if (event)

        // )}

       