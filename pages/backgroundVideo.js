import React, {useEffect, useRef} from "react"
import Container from '@material-ui/core/Container';

const BackgroundVideo = () => {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(()=>{
      videoRef.current.play()
    },100)
  }, []);

  return <Container maxWidth="lg">
  <video
      ref={videoRef}
      controls
      width="100%"
      loop
      muted
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      }}>
    <source src="/1_Getridox.mp4" type="video/mp4"/>
  </video>
</Container>
}

export default BackgroundVideo