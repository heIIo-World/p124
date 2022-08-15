function setup() {
     canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}
