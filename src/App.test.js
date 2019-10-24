import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

// Custom components
import About from './components/About';
import Activity from './components/Activity';
import Header from './components/Header';
import Home from './components/Home';
import Park from './components/Park';
import ParkCard from './components/ParkCard';
import Parks from './components/Parks';
import Activities from './components/Activities';
import State from './components/State';
import StateCard from './components/StateCard';
import States from './components/States';
import TeamMember from './components/TeamMember';

const cardsPerPage = 9;

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
  const match = {params: {stateName: "1"}};
  const parks = shallow(<Parks match={match}/>);

  it('renders successfully', () => {
    expect(parks).toMatchSnapshot();
  });

  it('cointains correct number of ParkCards', () => {
    expect(parks.find('ParkCard').length).toEqual(cardsPerPage);
  });
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

  it('cointains correct number of StateCards', () => {
    expect(states.find('StateCard').length).toEqual(cardsPerPage);
  });
});

describe('State instance page', function() {
  const match = {params: {stateName: "Texas"}};

  it('renders successfully', () => {
    const state = shallow(<State match={match}/>);
    expect(state).toMatchSnapshot();
  });
});

describe('Recreation page', function() {
  const match = {params: {stateName: "1"}};
  const rec = shallow(<Activities match={match}/>);

  it('renders successfully', () => {
    expect(rec).toMatchSnapshot();
  });

  it('cointains correct number of StateCards', () => {
    expect(rec.find('ActivityCard').length).toEqual(cardsPerPage);
  });
});

describe('Activity instance page', function() {
  const match = {params: {activityName: "Climbing"}};

  it('renders successfully', () => {
    const activity = shallow(<Activity match={match}/>);
    expect(activity).toMatchSnapshot();
  });
});
