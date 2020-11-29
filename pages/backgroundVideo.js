import React, {useEffect, useRef, useState} from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const BackgroundVideo = () => {

  //const [currentVideo, setCurrentVideo] = useState(0);

  var currentVideo = 0;
  const numVideos = 10;

  const videoRef = useRef()

  useEffect(() => {

    setTimeout(()=>{
        //let v = document.getElementById("videoPlayer");

        //v.height = v.clientHeight; // window.screen.availHeight
        //v.width = v.clientWidth; // window.screen.availWidth

        videoRef.current.play();
        clearTimeout();
    },100)

    setTimeout(()=>{
        let v = document.getElementById("videoPlayer");

        v.height = v.clientHeight; // window.screen.availHeight
        v.width = v.clientWidth; // window.screen.availWidth

        clearTimeout();
    },500)

  }, []);

  function onEnded()
  { 
    const video_player = document.getElementById("videoPlayer");

    var curVideo = currentVideo+1;
    if (curVideo >= numVideos)
    {
        curVideo = 0;
    }
    currentVideo = curVideo;

    console.log(curVideo);
    
    video_player.setAttribute("src", videoSource[curVideo]);
    fadeIt();

    video_player.play();

    //setCurrentVideo(curVideo + 1);
  }

  function fade(element) {
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 50);
  }

  function fadeIt() {
    setTimeout(function() {
        var e = document.getElementById('videoPlayer');
        fade(e);
        clearTimeout();
    }, 50);
  };

  // TO-DO: dynamically get videos from /videos dir
  const videoSource = ["1_Getridox.mp4", "2_Getridox.mp4","3_Getridox.mp4","4_Getridox.mp4","5_Getridox.mp4","6_Getridox.mp4","7_Getridox.mp4","8_Getridox.mp4","9_Getridox.mp4","10_Getridox.mp4"]

  return <Container style={{paddingRight: "0px", paddingLeft: "0px"}} maxWidth="lg">
  <video
      id="videoPlayer"
      onEnded={onEnded}
      ref={videoRef}
      //controls
      width="100%"
      height="100%"
      //loop
      muted
      style={{
        opacity: 1,
        position: "relative",
        left: 0,
        top: 0,
      }}>
    <source src={videoSource[currentVideo]} type="video/mp4"/>
  </video>
  <Button variant="contained" fullWidth style={{height: "50px", color: "#FFFFFF", backgroundColor: "#14a37f", marginTop: "-95px"}}>Read More about Getridox</Button>
</Container>
}

export default BackgroundVideo