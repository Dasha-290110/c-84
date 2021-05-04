canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="mars.jpg";
rover_image="rover.png";

rover_x=10;
rover_y=10;

function add() {
    background_image_tag=new Image();
    background_image_tag.onload=upload_background;
    background_image_tag.src=background_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
    up();
    console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }

    if(keypressed=="37"){
        left();
        console.log("left");
    }

    if(keypressed=="39"){
        right();
        console.log("right");
    }
}