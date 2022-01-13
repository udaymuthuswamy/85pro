canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
backgroud_image = "racing.jpg";
rover_image = "rover.png";

rover2_width = 100;
rover2_height = 90;
rover2_x = 10;
rover2_y = 10;
rover2_image = "rover2.png";

function add() {
    backgroud_imgTag = new Image();
    backgroud_imgTag.onload = uploadBackground;
    backgroud_imgTag.src = backgroud_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

    rover2_imgTag = new Image();
    rover2_imgTag.onload = uploadrover;
    rover2_imgTag.src = rover2_image;

}

function uploadBackground(){
    ctx.drawImage(backgroud_imgTag, 0, 0, canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

    ctx.drawImage(rover2_imgTag, rover2_x, rover2_y, rover2_width, rover2_height);2
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    up();
    console.log("up");

}
if(keyPressed=='40')
{
    down();
    console.log("down");
    
}
if(keyPressed=='37')
{
    left();
    console.log("left");
    
}
if(keyPressed=='39')
{
    right();
    console.log("right");
    
}

}
function up(){
    if(rover_y >=0){
        rover_y -= 10;
        console.log("When up arrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }

}

function down(){
    if(rover_y <=500){
        rover_y += 10;
        console.log("When down arrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }

}

function left(){
    if(rover_x >=0){
        rover_x -= 10;
        console.log("When left arrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }

}

function right(){
    if(rover_x <=700){
        rover_x += 10;
        console.log("When right arrow is pressed = " + rover_x + " - " +rover_y);
        uploadBackground();
        uploadrover();
    }

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='65')
{
    a();
    console.log("a");

}
if(keyPressed=='66')
{
    b();
    console.log("b");
    
}
if(keyPressed=='67')
{
    c();
    console.log("c");
    
}
if(keyPressed=='68')
{
    c();
    console.log("c");
    
}

}
function a(){
    if(rover2_y >=0){
        rover2_y -= 10;
        console.log("When up arrow is pressed = " + rover2_x + " - " +rover2_y);
        uploadBackground();
        uploadrover();
    }

}

function b(){
    if(rover2_y <=500){
        rover2_y += 10;
        console.log("When down arrow is pressed = " + rover2_x + " - " +rover2_y);
        uploadBackground();
        uploadrover();
    }

}

function c(){
    if(rover2_x >=0){
        rover2_x -= 10;
        console.log("When left arrow is pressed = " + rover2_x + " - " +rover2_y);
        uploadBackground();
        uploadrover();
    }

}

function d(){
    if(rover2_x <=700){
        rover2_x += 10;
        console.log("When right arrow is pressed = " + rover2_x + " - " +rover2_y);
        uploadBackground();
        uploadrover();
    }

}

