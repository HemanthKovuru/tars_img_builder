import "./../scss/SignUp.scss";

const SignUp = ({ popUp, signUpPopUpBox }) => {
  return (
    <>
      {popUp && (
        <div className='background-box'>
          <div className='signup-box'>
            <span onClick={signUpPopUpBox} className='cross2 cross'>
              &#10005;
            </span>
            <div className='step1'>
              <h2 className='heading__secondary'>Sign Up</h2>
              <div className='heading__sub'>It's quick and easy</div>

              <form className='form__signup'>
                <input
                  className='form__input'
                  type='text'
                  placeholder='First Name'
                  required
                />
                <input
                  className='form__input'
                  type='text'
                  placeholder='Last Name'
                  required
                />
                <input
                  className='form__input custom__input'
                  type='email'
                  placeholder='Email'
                  required
                />
                <input
                  className='form__input custom__input'
                  type='password'
                  placeholder='Password'
                  required
                />
                <input
                  className='form__input custom__input'
                  type='password'
                  placeholder='Confirm Password'
                  required
                />
                <button type='submit' className='btn btn-submit custom__input'>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
