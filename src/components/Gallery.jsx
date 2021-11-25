import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import UnsplashImage from "./UnsplashImage";

const Gallery = () => {
  const { images, loading } = useSelector((state) => state);

  if(loading) return <Loader />
  return (
    <div className="gallery">
      {images?.map((image) => (
        <UnsplashImage key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
