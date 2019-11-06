import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import nock from 'nock';
import waitUntil from 'async-wait-until';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

// Custom components
import About from './components/About';
import Recreation from './components/Recreation';
import Header from './components/Header';
import Home from './components/Home';
import Park from './components/Park';
import ParkCard from './components/ParkCard';
import Parks from './components/Parks';
import Recreations from './components/Recreations';
import State from './components/State';
import StateCard from './components/StateCard';
import States from './components/States';
import TeamMember from './components/TeamMember';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com";

describe('Functionality Tests', () => {
  beforeAll(() => {
  // Prepare nock to respond to a request
  nock(API_ENDPOINT)
    .get('/nationalparks/page=1')
    .reply(200, [
      {rec_ids: "1234"}
    ], {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });
  });

  describe('App', function() {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders 1 navbar', () => {
      const app = shallow(<App />);
      expect(app.find('Header').length).toEqual(1);
    });
  });

  describe('About page', function() {
    const about = shallow(<About />);

    it('renders successfully', () => {
      expect(about).toMatchSnapshot();
    });

    it('renders 5 team cards', () => {
      expect(about.find('TeamMember').length).toEqual(5);
    });
  });

  describe('Splash page', function() {
    it('renders successfully', () => {
      const splash = shallow(<Home />);
      expect(splash).toMatchSnapshot();
    });
  });

  describe('Parks page', function() {
    const match = {params: {pageNum: "1"}};
    const parks = shallow(<Parks match={match}/>);

    it('renders successfully', () => {
      expect(parks).toMatchSnapshot();
    });

    // it('cointains correct number of ParkCards', async (done) => {
    //   await waitUntil(() => parks.state.loaded !== false)
    //
    //   expect(parks.find('ParkCard').length).toEqual(1);
    // });
  });

  describe('Park instance page', function() {
    const match = {params: {parkName: "Yosemite"}};

    it('renders successfully', () => {
      const park = shallow(<Park match={match}/>);
      expect(park.props().parkName).toMatchSnapshot();
    });
  });

  describe('States page', function() {
    const match = {params: {stateName: "1"}};
    const states = shallow(<States match={match}/>);

    it('renders successfully', () => {
      expect(states).toMatchSnapshot();
    });

    // it('cointains correct number of StateCards', () => {
    //   expect(states.find('StateCard').length).toEqual(9);
    // });
  });

  describe('State instance page', function() {
    const match = {params: {stateName: "Texas"}};

    it('renders successfully', () => {
      const state = shallow(<State match={match}/>);
      expect(state).toMatchSnapshot();
    });
  });

  describe('Recreation page', function() {
    const match = {params: {pageNum: "1"}};
    const rec = shallow(<Recreations match={match}/>);

    it('renders successfully', () => {
      expect(rec).toMatchSnapshot();
    });

    // it('cointains correct number of ActivityCards', () => {
    //   expect(rec.find('ActivityCard').length).toEqual(9);
    // });
  });

  describe('Activity instance page', function() {
    const match = {params: {activityName: "Climbing"}};

    it('renders successfully', () => {
      const activity = shallow(<Recreation match={match}/>);
      expect(activity).toMatchSnapshot();
    });
  });
});
