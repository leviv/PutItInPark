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
                <Link className="nav-link about-link" to="/about/"><h5>About</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link parks-link" to="/parks/"><h5>National Parks</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link recs-link" to="/recreation/"><h5>Recreation</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link states-link" to="/states/"><h5>States</h5></Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="button button-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
