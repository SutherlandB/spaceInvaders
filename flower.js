function allien(){
    this.x = width/2; 

    this.show = function(){
        fill("red");
        rect(this.x, this.y, 20, 30);
    }

    this.move = function(dir) {
        this.x += dir*5;
    }
}

