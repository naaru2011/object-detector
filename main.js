function setup(){
    canvas = createCanvas(600, 500);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: discovering objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
}
function draw(){
    image(video, 0, 0, 600, 500);
    }