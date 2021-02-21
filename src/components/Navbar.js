import React from "react";
import "./../scss/Navbar.scss";

const Navbar = ({ getQueryImages, signUpPopUpBox }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className='navbar__container'>
      <div className='navbar'>
        <div onClick={handleClick} className='logo'>
          Image Gallery
        </div>
        <div className='search__box'>
          <input
            onChange={getQueryImages}
            placeholder='Search for images'
            className='search_field'
            type='text'
          />
        </div>
        <div className='navbar__right'>
          <span onClick={signUpPopUpBox} className='btn btn-signup'>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
