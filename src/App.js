import React,{useEffect,useState} from "react";
import Vedio from "./Vedio";
import "./styles.css";
import axios from "./axios";


function App() {  
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

     fetchPosts();
  },[]);

  console.log(videos);

  return (
    <div>
    <div className="app">
      <div className="app__vedios">
        {videos.map(({url,channel,description,song,likes,comments,shares}) =>(
          <Vedio 
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;