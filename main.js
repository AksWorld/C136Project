Status="";
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
     video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    

    console.log();
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="Status : Detected";
}


 function modelLoaded(){
    console.log("The Devil Fruit has arrived");
    Status=true;
}
function draw(){
    image(video,0,0,480,380);
   
}