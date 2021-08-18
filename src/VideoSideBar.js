import React,{ useState } from 'react'
import './VideoSideBar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function VideoSideBar({likes,comments,shares}) {
    const [liked,setLiked]=useState(false)
    return (
        <div className = "VideoSideBar">
            <div id = "VideoSideBar__button">
               {liked ? 
               <FavoriteIcon 
                fontSize = "large"
                onClick={(e) => setLiked(false)}
                /> : 
               <FavoriteBorderIcon 
               fontSize = "large"
               onClick={(e) => setLiked(true)}
                /> }
               <p>{liked ? likes+1 : likes}</p>
            </div>
            <div id = "VideoSideBar__button">
               <CommentIcon fontSize = "large" />
               <p>{comments}</p>
            </div>
            <div id = "VideoSideBar__button">
               <ShareIcon fontSize = "large" />
              <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar;