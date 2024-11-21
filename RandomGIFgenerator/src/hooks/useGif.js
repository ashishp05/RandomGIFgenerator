import  { useState, useEffect } from "react";
import axios from "axios";

const useGif = (tag) => {
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState('false');
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
  async function fatchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const result = data.data.images.downsized_large.url;

    setGif(result);
    setLoading(false);
  }

  useEffect(() => {
    fatchData();
  }, [tag]);

  return { gif , loading , fatchData}
};

export default useGif;
