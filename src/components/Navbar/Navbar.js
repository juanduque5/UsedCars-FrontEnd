import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ name, loggedIn, onSignOut }) => {
  const [options, setOptions] = React.useState(false);

  const handleUser = () => {
    setOptions(!options);
  };

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="item0">
          <a href="/" className="logo">
            <span className="u">u</span>sed<span className="highlight">C</span>ars
          </a>
        </div>

        <div className="item2">
          <a href="/">HOME</a>
          <a href="/buy">COLLECTION</a>
          <a href="/news">NEWS</a>
          <a href="/contact">CONTACT US</a>
        </div>

        <div className="item3">
          {loggedIn ? (
            <div className="user-options">
              <button className="user-name" onClick={handleUser}>
                <FontAwesomeIcon style={{ marginRight: '2px' }} icon={faUser} /> {name}
              </button>
              <div className="user-options-dropdown" style={{ display: options ? 'block' : 'none' }}>
                <div className="user-option">
                  <a href="/uploads">Uploads</a>
                </div>
                <div className="user-option">
                  <a href="/">Bookmark</a>
                </div>
                <div className="user-option">
                  <a onClick={handleSignOut} href="/">Sign out</a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a id="ja" href="/signin">SIGN IN</a>
              <a href="/register">REGISTER</a>
            </>
          )}
        </div>
      </div>

      <div className="info">
        <div className="import">
          <div className="note">
            <h1>Import automobile from America</h1>
            <p>
              Request a consultation, our sales team will contact you as soon as possible,
              help you select your desirable automobile.  help you select your desirable automobile.
               help you select your desirable automobile.
            </p>
            <button className="btn">
              <strong>Consultation</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
