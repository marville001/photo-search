import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getImageDetailsAction } from "../redux/actions/imageDetails";

const Details = () => {
  const dispatch = useDispatch();
  const { image, loading } = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getImageDetailsAction(id));
  }, [id, dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="details">
      <Link to="/" className="go-back">Go Back</Link>
      <h1 className="title">Details</h1>
      <div className="details-image">
        <img src={image.urls?.raw} alt="" />
      </div>
      <div className="details-content">
        <div className="description">
          <h4>Description</h4>
          <p>{image.desciption || image.alt_description  || "N/B"}</p>
        </div>
        <div className="location">
          <h4>Location</h4>
          <p>{image.location?.title || image.location?.name || "N/B"}</p>
        </div>
        <div className="tags-container">
          <h4>Tags</h4>
          <div className="tags">
            {image.tags?.map((tag) => (
              <div className="tag">{tag.title}</div>
            ))}
          </div>
        </div>

        <div className="stats">
          <div className="stat desc">
            <h3>Downloads</h3>
            <div className="stat-value">{image.downloads}</div>
          </div>
          <div className="stat views">
            <h3>Views</h3>
            <div className="stat-value">{image.views}</div>
          </div>
          <div className="stat likes">
            <h3>Likes</h3>
            <div className="stat-value">{image.likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
