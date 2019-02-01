import axios from 'axios';

const KEY = "AIzaSyDX213gJOqFC1gB3D3icjbXPhhmApT1YLc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
