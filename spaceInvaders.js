let ship;
let img1; 
let img2; 

const enemyWidth = 200;
const enemyHeight = 200;

function setup(){
    createCanvas(600,400); 
    img1 = loadImage("http://cache3.asset-cache.net/xr/149911027.jpg?v=1&c=IWSAsset&k=3&d=77BFBA49EF8789215ABF3343C02EA5488BFC09ECB4F8B813D8D7172CDFA1C0639680FB1C300D737EA55A1E4F32AD3138");
    img2 = loadImage("https://cdn-images-1.medium.com/max/1600/1*qHknHkgtehcYsOSsbZSi-g.jpeg");
    ship = new Ship();
}

function draw(){
    background(img1);
    ship.show();
    drawGame(); // redraw the game
    nextStep();
    new Image(img2, 3, 90)     
    rect(300, 0, 100, 100);  

}

function bulletHit(x,y, w,h, pointX, pointY){
    const isBelowTop = pointY > y;
    const isAboveBottom = pointY < (y+h);
    const isRightOfLeft = pointX > x;
    const isLeftofRight = pointX < (x+w);
    const isInside = isBelowTop && isAboveBottom && isRightOfLeft && isLeftofRight;
    return isInside;
}
function deleteCollisions(){ 
    for(let i = enemies.length-1; i>=0; i--) { 
        for(let j = 0; j < bullets.length; j++) { 
            let eX = enemies[i].x;
            let eY = enemies[i].Y;
            let bX = bullets[j][0];
            let bY = bullets[j][1];
            const collided = bulletHit(eX,eY, enemyWidth, enemyHeight, bX, bY);
            if(collided){
                enemies.splice(i,rect(300, 0, 100, 100));
                break;
            }
        }
    }
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ship.move(5);
    } else if (keyCode === LEFT_ARROW) {
        ship.move(-5);
    } else if (keyCode === 32) {
    bullets.push([ship.x + 20, height-20]);
    }
 }
 // use variables to represent the "state" of the game - information that represents what is going on
let spaceshipX = 10;
let bullets = [];
let enemies = [];
// draw our canvas
// update the game state when a key or mouse is pressed
/*function keyPressed(){
    if (keyCode === 32) {}
    const x_y = [this.x, height-20];
    bullets.push(x_y);
}*/
// function that draws the state of the game
function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
        rect(x, y, 5, 5);
    }
}
// updates the game state every step
function nextStep(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 1;
    }
    deleteCollisions();
}