import './App.css';
import Heading from './components/Heading';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';

import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    .then(res=>console.log(res))

  }, [])

  return (
    <div className="App">
      <Heading />
      <Loader />
      <UnsplashImage />
    </div>
  );
}

export default App;
