function preload(){

}
var tintcolor = "";
function setup(){
    canvas = createCanvas(680, 450);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 0, 0, 680, 450);
    tint(tintcolor);
}

function apply_filter(){
    tintcolor = document.getElementById("filter_color").value;
}

function take_snapshot(){
    save('student_photo.png');
}