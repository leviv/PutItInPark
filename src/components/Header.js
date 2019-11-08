import React from 'react';
import Fuse from 'fuse.js';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/img/logo.png';

const LOC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations";
const REC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations";
const PARK_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

class Header extends React.Component {

  search() {
    let searchString = document.getElementById("searchField").value
    fetch(LOC_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))

      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ['name'],
        };
        const fuse = new Fuse(data['objects'], options)
        console.log(fuse.search(searchString))
      })

      // .then((data) => {
      //   this.setState({numPages: data.total_pages});
      //   // Process data
      //   data.objects.forEach((park) => {
      //     this.state.states.push(park);
      //   });
      // }).then(() => {
      //   this.setState({loaded: true});
      // });
    fetch(REC_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))

      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ['rec_name'],
        };
        const fuse = new Fuse(data['objects'], options)
        console.log(fuse.search(searchString))
      })

      // .then((data) => {
      //   this.setState({numPages: data.total_pages});
      //   // Process data
      //   data.objects.forEach((park) => {
      //     this.state.states.push(park);
      //   });
      // }).then(() => {
      //   this.setState({loaded: true});
      // });
    fetch(PARK_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))

      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ['park_name'],
        };
        const fuse = new Fuse(data['objects'], options)
        console.log(fuse.search(searchString))
      })

      // .then((data) => {
      //   this.setState({numPages: data.total_pages});
      //   // Process data
      //   data.objects.forEach((park) => {
      //     this.state.states.push(park);
      //   });
      // }).then(() => {
      //   this.setState({loaded: true});
      // });
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
              <input className="form-control mr-sm-2" id="searchField" type="search" placeholder="Search" aria-label="Search"/>
              <FontAwesomeIcon icon={faSearch} className="model-search-component" onClick={this.search}/>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
