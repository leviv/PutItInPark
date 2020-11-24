import React from 'react';
import {  withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/img/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this);
  }

  search(event) {
    if (event.keyCode === undefined || event.keyCode === 13) {
      event.preventDefault();
      console.log(event);
      let searchString = document.getElementById("searchField").value
      this.props.history.push('/search/' + searchString);
      window.location.reload();
    }
  }

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
                <Link className="nav-link parks-link" to="/parks/1"><h5>National Parks</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link recs-link" to="/recreations/1"><h5>Recreation</h5></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link states-link" to="/states/1"><h5>States</h5></Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control" id="searchField" type="search" placeholder="Search" aria-label="Search" onKeyDown={this.search}/>
              <FontAwesomeIcon icon={faSearch} className="model-search-component" id="nav-search-icon" onClick={this.search}/>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
