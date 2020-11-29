import React, {useEffect, useRef} from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const BackgroundVideo = () => {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },100)
  }, []);

  return <Container style={{paddingRight: "0px", paddingLeft: "0px"}} maxWidth="lg">
  <video
      ref={videoRef}
      controls
      width="100%"
      loop
      muted
      style={{
        opacity: 1,
        position: "relative",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      }}>
    <source src="/1_Getridox.mp4" type="video/mp4"/>
  </video>
  <Button variant="contained" fullWidth style={{height: "50px", color: "#FFFFFF", backgroundColor: "#14a37f", marginTop: "-85px"}}>Read More</Button>
</Container>
}

export default BackgroundVideo