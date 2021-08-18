import React, { useRef, useState } from "react";
import VideoFotter from "./VideoFotter";
import VideoSideBar from "./VideoSideBar";
import "./video.css";

function Video({url,channel,description,song,likes,comments,shares}) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
      ></video>
      
      <VideoFotter 
      channel ={channel}
      description={description}
      song= {song} 
      />
      <VideoSideBar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;