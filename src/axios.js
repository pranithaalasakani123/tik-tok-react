 import axios from "axios";

 const instance = axios.create({
     baseURL:"https://tiktok-clone-db.herokuapp.com/",
 });


 export default instance;
