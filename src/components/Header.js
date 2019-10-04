import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Put It In Park</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parks/">National Parks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recreation/">Recreation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/states/">States</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
