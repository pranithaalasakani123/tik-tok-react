import React from "react";
import "./VideoFotter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFotter({channel , description , song }) {
  return (
    <div className="VideoFotter">
      <div className="VideoFotter__text">
        <div>
          <h3 id="Footer__heading">@{channel}</h3>
          <p id="Fotter__para">{description}</p>
          <div className = "videoFotter__ticker">
             <MusicNoteIcon className = "VideoFotter__icon" />
             <Ticker mode="smooth">
               {({ index }) => (
                 <>
                   <p>{song}</p>
                 </>
                )}
             </Ticker>
          </div>
        </div>
      </div>
      <div className="record__view">
        <img
          className="videoFotter__record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default VideoFotter;