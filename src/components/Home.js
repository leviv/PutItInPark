import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../assets/img/splash.png';
import Yosemite from '../assets/img/yosemite.jpg';
import Climbing from '../assets/img/climbing.jpg';
import Texas from '../assets/img/texas.jpg';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="splash">
          <div className="row">
            <div className="col-md-7 splash-image">
              <img src={Splash} alt="Illustration of a man with binoculars"/>
            </div>
            <div className="col-md-5">
              <div className="splash-title">
                <h1><span>Put It In Park</span></h1>
                <p>Explore different national parks around the country, and everything that they have to offer!</p>
                <Link to="/about/"><button className="button button-primary">About</button></Link>
                <Link to="/parks/"><button className="button button-primary">Parks</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="models-splash">
          <div className="container">
            <h1 className="text-center">Explore Parks, States, and Activities!</h1>
            <div className="row">
              <div className="col-md-4 model-splash">
                <img src={Yosemite} alt="National park landscape"/>
                <h3>National Parks</h3>
                <p>Look through all of the national parks that the United States has to offer! View information about each park such as what recreational activities the park has, some basic history, and the location so that you can one day visit yourself.</p>
                <Link to="/parks/"><button className="button button-secondary">Explore Parks</button></Link>
              </div>
              <div className="col-md-4 model-splash">
                <img src={Climbing} alt="A man climbing outdoors"/>
                <h3>Recreational Activities</h3>
                <p>From climbing to whitewater rafting, there are a host of recreational activities that one can experience at national parks. Find your favorite activity, and view where in the world you can go to experience it for yourself.</p>
                <Link to="/recreation/"><button className="button button-secondary">Explore Activities</button></Link>
              </div>
              <div className="col-md-4 model-splash">
                <img src={Texas} alt="Texas state flag"/>
                <h3>States</h3>
                <p>View information on each of the 50 United States such as thier population, the recreational activities that they have, as well as the different national parks that each state has to offer.</p>
                <Link to="/states/"><button className="button button-secondary">Explore States</button></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="splash-call-to">
          <div className="splash-call-to-content">
            <h2>Find your favorite national park today!</h2>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
