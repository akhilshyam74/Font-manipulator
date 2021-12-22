noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function modelLoaded(){
    console.log("Model is Loaded")
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
   canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rigthWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX +"rightWristX"+ rightWristX + "Difference = "+ difference);
    }
}
function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML = "Font size of the text is " + difference    ;
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text("Akhil", 50, 400);
}