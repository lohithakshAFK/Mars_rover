canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var rover_height = 90;
var rover_width = 100;

mars_images = ["IMG_1.jpg" , "IMG_2.jpg" , "IMG_3.jpg" , "IMG_$.jpg"];
random_numbers = Math.floor(Math.random()*4);

background_img = mars_images[random_numbers];
console.log("background img = " + background_img);
rover_img = "rover.png";

rover_x = 200;
rover_y = 100;

function add(){
    background_thing = new Image();
    background_thing.onload = upload_background;
    background_thing.src = background_img;

    rover_thing = new Image();
    rover_thing.onload = upload_rover;
    rover_thing.src = rover_img;
}

function upload_background(){
    ctx.drawImage(background_thing, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_thing, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_key_down);

function my_key_down(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == "38"){
        up();
        console.log("up");
    }

    if (key_pressed == "40"){
        down();
        console.log("down");
    }

    if (key_pressed == "37"){
        left();
        console.log("left");
    }

    if (key_pressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed = " + rover_x + "," + rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed = " + rover_x + "," + rover_y);
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when left arrow key is pressed - " + rover_x + "," + rover_y);
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when right arrow key is pressed - " + rover_x + "," + rover_y);
        upload_background();
        upload_rover();
    }
}