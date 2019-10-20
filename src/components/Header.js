import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png';

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="Icon with mountains and the sun" width="40px"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about/"><h5>About</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parks/"><h5>National Parks</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recreation/"><h5>Recreation</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/states/"><h5>States</h5></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
