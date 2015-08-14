/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/arrow.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/bomb.ts" />
/// <reference path="objects/bowarrow.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/road.ts" />
/// <reference path="objects/Red.ts" />
/// <reference path="objects/balloon.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/arrow.ts" />
/// <reference path="managers/collision.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var howToPlay;
var stage;
var stats;
var logo;
var assets;
var bowArrow;
var bow;
var manifest = [
    { id: "road", src: "assets/images/road.png" },
    { id: "road2", src: "assets/images/road2.png" },
    { id: "road3", src: "assets/images/road3.png" },
    { id: "logo", src: "assets/images/logo.png" },
    { id: "bow", src: "assets/images/bow.png" },
    { id: "howToPlay", src: "assets/images/howToPlay.png" },
    { id: "Arrow", src: "assets/images/Arrow.png" },
    { id: "Arrow2", src: "assets/images/Arrow2.png" },
    { id: "Arrow3", src: "assets/images/Arrow3.png" },
    { id: "Red", src: "assets/images/Red.png" },
    { id: "balloon", src: "assets/images/balloon.png" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "engine", src: "assets/audio/engine.ogg" },
    { id: "start", src: "assets/images/start.png" },
    { id: "again", src: "assets/images/again.png" },
    { id: "arrow", src: "assets/images/Arrow.png" },
    { id: "blasted", src: "assets/images/blasted.png" },
    { id: "bomb", src: "assets/images/bomb.png" },
    { id: "bowArrow", src: "assets/images/bowArrow.png" },
    { id: "how", src: "assets/images/how.png" }
];
// Game Variables
var road;
var Arrow;
var road2;
var road3;
var Red;
var bomb;
var random;
var balloons = [];
var start;
var again;
var how;
var scoreboard;
var inst1;
var inst2;
var x = 10;
var level = 0;
// Game Managers
var collision;
var started = "false";
var isClicked = "false";
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    //  createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '1600px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
function callChange(clicked) {
    createjs.Sound.stop();
    this.sound = "engine";
    createjs.Sound.play(this.sound);
    bowArrow.image = bow.image;
    this.sound = "yay";
    createjs.Sound.play(this.sound);
    //  scoreboard.lives -= 1;
    isClicked = "true";
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    bowArrow.update();
    road.update();
    Arrow.update(started, isClicked, bowArrow.y, bowArrow.height);
    if (scoreboard.score > 700 && level == 2)
        Red.update();
    if (scoreboard.score > 1400 && level == 3)
        bomb.update();
    if (scoreboard.lives == 0)
        endScreen();
    random = Math.floor(Math.random() * 6 + 1);
    console.log("random is" + random);
    // Red.update();
    if (started == "true") {
        for (var balloon = 0; balloon < 3; balloon++) {
            balloons[balloon].update();
            collision.check(balloons[balloon]);
        }
    }
    if (started == "true")
        collision.check(Red);
    collision.check(bomb);
    if (started == "true")
        scoreboard.update();
    stage.update();
    stats.end(); // end measuring
}
//Our start game screen function
function startScreen() {
    isClicked = "false";
    createjs.Sound.stop();
    this.sound = "yay";
    createjs.Sound.play(this.sound);
    road = new objects.road(assets.getResult("road"));
    stage.addChild(road);
    start = new createjs.Bitmap(assets.getResult("start"));
    start.x = 180;
    start.y = 200;
    stage.addChild(start);
    how = new createjs.Bitmap(assets.getResult("how"));
    how.x = 180;
    how.y = 350;
    stage.addChild(how);
    logo = new createjs.Bitmap(assets.getResult("logo"));
    logo.x = 700;
    logo.y = 170;
    stage.addChild(logo);
    start.on("click", startButtonClicked);
    start.on("mouseover", startButtonOver);
    start.on("mouseout", startButtonOut);
    how.on("click", howButtonClicked);
    how.on("mouseover", howButtonOver);
    how.on("mouseout", howButtonOut);
}
function resetArrow() {
    isClicked = "false";
}
//move to game play screen on button click
function startButtonClicked() {
    started = "true";
    stage.removeAllChildren();
    road = new objects.road(assets.getResult("road"));
    stage.addChild(road);
    stage.removeChild(Red);
    Arrow = new objects.Arrow(assets.getResult("Arrow"));
    Arrow.y = bowArrow.y + (bowArrow.height) / 2;
    stage.addChild(Arrow);
    //add Red object to stage
    //  Red = new objects.Red(assets.getResult("Red"));
    //  stage.addChild(Red);
    // add Arrow object to stage
    bowArrow = new objects.bowArrow(assets.getResult("bowArrow"));
    stage.addChild(bowArrow);
    //   Arrow = new objects.Arrow(assets.getResult("Arrow"));
    // Arrow.y = bowArrow.y + (bowArrow.height) / 2;
    // stage.addChild(Arrow);
    // add 3 balloon objects to stage
    for (var balloon = 0; balloon < 3; balloon++) {
        balloons[balloon] = new objects.balloon(assets.getResult("balloon"));
        stage.addChild(balloons[balloon]);
    }
    //add scoreboard
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
}
function startButtonOver() { start.alpha = 0.8; }
function startButtonOut() {
    start.alpha = 1.0;
}
//display instructions when user clicks on how to play button
function howButtonClicked() {
    createjs.Sound.stop();
    this.sound = "yay";
    createjs.Sound.play(this.sound);
    stage.removeAllChildren();
    road = new objects.road(assets.getResult("road"));
    stage.addChild(road);
    howToPlay = new createjs.Bitmap(assets.getResult("howToPlay"));
    howToPlay.x = 0;
    howToPlay.y = 25;
    stage.addChild(howToPlay);
    start = new createjs.Bitmap(assets.getResult("start"));
    start.x = 450;
    start.y = 60;
    stage.addChild(start);
    start.on("click", startButtonClicked);
    start.on("mouseover", startButtonOver);
    start.on("mouseout", startButtonOut);
}
function howButtonOver() { how.alpha = 0.8; }
function howButtonOut() { how.alpha = 1.0; }
function againButtonOver() {
    again.alpha = 0.8;
}
function againButtonOut() {
    again.alpha = 1.0;
}
// Our end screen(game over)Game Function
function endScreen() {
    createjs.Sound.stop();
    this.sound = "yay";
    createjs.Sound.play(this.sound);
    stage.removeAllChildren();
    road = new objects.road(assets.getResult("road"));
    stage.addChild(road);
    inst1 = new createjs.Text("GAME OVER", "39px consolas", "#ffffff");
    inst1.x = 150;
    inst1.y = 60;
    stage.addChild(inst1);
    inst2 = new createjs.Text("FINAL SCORE:" + scoreboard.score, "39px consolas", "#ffffff");
    inst2.x = 150;
    inst2.y = 100;
    stage.addChild(inst2);
    again = new createjs.Bitmap(assets.getResult("again"));
    again.x = 150;
    again.y = 250;
    stage.addChild(again);
    again.on("click", main);
    again.on("mouseover", againButtonOver);
    again.on("mouseout", againButtonOut);
}
function main() {
    //add road object to stage
    road = new objects.road(assets.getResult("road"));
    stage.addChild(road);
    bow = new objects.bowArrow(assets.getResult("bow"));
    stage.addChild(bow);
    road2 = new objects.road(assets.getResult("road2"));
    stage.addChild(road2);
    road3 = new objects.road(assets.getResult("road3"));
    stage.addChild(road3);
    bomb = new objects.bomb(assets.getResult("bomb"));
    stage.addChild(bomb);
    bowArrow = new objects.bowArrow(assets.getResult("bowArrow"));
    stage.addChild(bowArrow);
    Red = new objects.Red(assets.getResult("Red"));
    stage.addChild(Red);
    // add Arrow object to stage
    Arrow = new objects.Arrow(assets.getResult("Arrow"));
    stage.addChild(Arrow);
    // add 3 balloon objects to stage
    for (var i = 0; i < 3; i++) {
        balloons[i] = new objects.balloon(assets.getResult("balloon"));
        stage.addChild(balloons[i]);
    }
    scoreboard = new objects.ScoreBoard();
    //add collision manager
    collision = new managers.Collision();
    //  stage.removeAllChildren();
    startScreen();
}
function secondLevel() {
    scoreboard.lives = 10;
    stage.removeChild(Arrow);
    scoreboard.score += 200;
    level = 2;
    road.image = road2.image;
    for (var i = 0; i < 3; i++) {
        stage.removeChild(balloons[i]);
    }
    //add island object to stage
    Red = new objects.Red(assets.getResult("Red"));
    stage.addChild(Red);
    // add plane object to stage
    Arrow = new objects.Arrow(assets.getResult("Arrow2"));
    stage.addChild(Arrow);
    // add 3 cloud objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        balloons[cloud] = new objects.balloon(assets.getResult("balloon"));
        stage.addChild(balloons[cloud]);
    }
    console.log("Random is" + random);
    // add 3 balloon objects to stage
    /* for (var i = 0; i < 3; i++) {
         random = Math.floor(Math.random() * 6 + 1);
         if (random > 3) {
             Red = new objects.Red(assets.getResult("Red"));
             stage.addChild(Red);
         }
         if (random < 3) {
             balloons[i] = new objects.balloon(assets.getResult("balloon"));
             stage.addChild(balloons[i]);
         }
         
        
 
 
     }*/
} //add collision manager
function thirdLevel() {
    scoreboard.lives = 10;
    stage.removeChild(Red);
    stage.removeChild(Arrow);
    road.image = road3.image;
    scoreboard.score += 300;
    resetArrow();
    level = 3;
    for (var i = 0; i < 3; i++) {
        stage.removeChild(balloons[i]);
    }
    console.log("Random is" + random);
    Arrow = new objects.Arrow(assets.getResult("Arrow3"));
    stage.addChild(Arrow);
    //  scoreboard.score = 0;
    for (var cloud = 0; cloud < 3; cloud++) {
        balloons[cloud] = new objects.balloon(assets.getResult("balloon"));
        stage.addChild(balloons[cloud]);
    }
    Red = new objects.Red(assets.getResult("Red"));
    stage.addChild(Red);
    bomb = new objects.bomb(assets.getResult("bomb"));
    stage.addChild(bomb);
    // add 3 balloon objects to stage
}
//add collision manager
//# sourceMappingURL=game.js.map