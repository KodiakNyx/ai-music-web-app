songstatus = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;

leftwristX = 0;
leftwristY = 0;

rightwristX = 0;
rightwristY = 0;

function gotPoses()
{
    document.getElementById(leftwristScore).innerHTML
    scoreLeftWrist = results[0].keypoints[9].score;
    scoreRightWrist = results[0].keypoints[10].score;

}

function draw()
{
    image(video, 0, 0, 600, 500)

    song1status = "";

    fill("#FF0000");
    stroke("#FF0000");

    if (scoreLeftWrist > 0.2)
    {
        circle(leftwristX, leftwristY, 20);
        InNumberleftwristY = Number(leftwristY);
        remove_decimals = floor(InNumberleftwristY);
        volume = remove_decimals / 500;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        
    }

    if (scoreRightWrist > 0.2) {
      circle(rightwristX, rightwristY, 20);
      InNumberrightwristY = Number(rightwristY);
      remove_decimals = floor(InNumberrightwristY);
      volume = remove_decimals / 500;
      document.getElementById("volume").innerHTML = "Volume = " + volume;
    }
    if (song1status = false)
    {
        song1.play(); 
        document.getElementById.innerHTML("Song 1 Is Playing");
    }

    if ((song2status = false)) {
      song2.play();
      document.getElementById.innerHTML("Song 2 Is Playing");
    }
}