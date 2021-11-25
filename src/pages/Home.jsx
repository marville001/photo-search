import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from '../components/Header'
import Gallery from '../components/Gallery'
import { searchImagesAction } from "../redux/actions/imagesSearch";

const Home = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchImagesAction());
  }, [dispatch]);
    return (
        <div>
            <Header />
            <Gallery />
        </div>
    )
}

export default Home
