import "./App.css";
import Heading from "./components/Heading";
import UnsplashImage from "./components/UnsplashImage";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...res.data]))
      .catch((e) => console.log({ error: e }));
  }, []);

  return (
    <div className="App">
      <Heading />
      <div className="gallery">
      {images.map((image) => (
        <UnsplashImage key={image.id} image={image} />
      ))}
      </div>
    </div>
  );
}

export default App;
