import React, { useEffect, useState } from "react";
import ShowImages from "./../components/ShowImages";
import Navbar from "./../components/Navbar";
import axios from "axios";
import SignUp from "../components/SignUp";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const access_key = "QGpGxp2oLjL5SW-YMAG2X9nU8IecCGN2F0bIBq-0AOU";

  // signup popup
  const [popUp, setPopUp] = useState(false);

  const signUpPopUpBox = () => {
    setPopUp(!popUp);
  };

  // fetch home images
  const getHomeImages = () => {
    setLoading(true);
    axios
      .get(
        `https://api.unsplash.com/photos?client_id=${access_key}&page=${pageNumber}&per_page=18`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
        console.log([...images, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  useEffect(() => {
    getHomeImages();
  }, [pageNumber]);

  // getQueryImages
  const getQueryImages = (evt) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${evt.target.value}&client_id=${access_key}&page=${pageNumber}&per_page=18`
      )
      .then((res) => {
        setImages(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // load more images
  const loadMore = () => {
    setPageNumber((prePage) => prePage + 1);
  };
  if (loading) {
    return <div className='loading'>Loading...</div>;
  }
  return (
    <div>
      <Navbar getQueryImages={getQueryImages} signUpPopUpBox={signUpPopUpBox} />
      <ShowImages images={images} loadMore={loadMore} />
      <SignUp signUpPopUpBox={signUpPopUpBox} popUp={popUp} />
    </div>
  );
};

export default HomePage;
