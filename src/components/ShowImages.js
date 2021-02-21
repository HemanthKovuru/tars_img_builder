import React, { useState } from "react";
import "./../scss/ShowImages.scss";

const ShowImages = ({ images, loadMore }) => {
  // image popup state
  const [popUp, setPopUp] = useState(false);
  const [popUpImg, setPopUpImg] = useState();
  const handleClick = (image) => {
    setPopUp(!popUp);
    setPopUpImg(image);
  };

  // render images
  const renderImages = (images) => {
    if (!images || images.length <= 0 || images === []) {
      return;
    } else {
      console.log("else images", images);
      return images.map((image) => (
        <>
          {/* images display */}
          <div
            onClick={() => handleClick(image)}
            key={image.id}
            className='img__container'>
            <img src={image.urls.small} alt={image.tagline} />
            <div className='img__user'>
              <img src={image.user.profile_image.small} alt={image.tagline} />
              <div> {image.user.name} </div>
              <div className='likes'> Likes: {image.user.total_likes} </div>
            </div>
          </div>
          {/* end of images display */}

          {/* popup box single image */}
          {popUp && (
            <div className='background-box'>
              <div className='popup-box'>
                <img src={popUpImg.urls.regular} alt={popUpImg.description} />
              </div>
              <span onClick={handleClick} className='cross'>
                &#10005;
              </span>
              <div className='user-info'>
                <img
                  src={popUpImg.user.profile_image.small}
                  alt={popUpImg.description}
                />
                <div className='username'>{popUpImg.user.username}</div>
                <div className='instagram'>
                  @{popUpImg.user.instagram_username}
                </div>
              </div>
            </div>
          )}
          {/* end of popup box single image */}
        </>
      ));
    }
  };

  return (
    <>
      <div className='images__container'>{images && renderImages(images)}</div>
      <div className='load-more' onClick={loadMore}>
        &darr; loadmore...
      </div>
    </>
  );
};

export default ShowImages;
