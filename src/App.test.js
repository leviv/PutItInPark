import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import waitUntil from 'async-wait-until';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

// Custom components
import About from './components/about/About';
import Header from './components/Header';
import Home from './components/Home';
import Park from './components/park/Park';
import ParkCard from './components/park/ParkCard';
import Parks from './components/park/Parks';
import Recreations from './components/recreation/Recreations';
import RecreationCard from './components/recreation/RecreationCard';
import Recreation from './components/recreation/Recreation';
import State from './components/state/State';
import StateCard from './components/state/StateCard';
import States from './components/state/States';
import TeamMember from './components/about/TeamMember';
import ToolCard from './components/about/ToolCard';
import Search from './components/Search';

describe('Basic functionality Tests', () => {
  describe('App', function() {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the navbar', () => {
      const header = shallow(<Header />);
      expect(header).toMatchSnapshot();
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

    it('renders 18 tool cards', () => {
      expect(about.find('ToolCard').length).toEqual(18);
    });
  });

  describe('Splash page', function() {
    it('renders successfully', () => {
      const splash = shallow(<Home />);
      expect(splash).toMatchSnapshot();
    });
  });
});

describe('Model Page Tests', () => {
  describe('Parks page', function() {
    it('renders page successfully', () => {
      const match = {params: {pageNum: "1"}};
      const parks = shallow(<Parks match={match}/>);
      expect(parks).toMatchSnapshot();
    });

    const parks = shallow(<ParkCard park_name="Test-Park" num_rec="123" visitors="321" fee="0"/>);

    it('renders ParkCard successfully', () => {
      expect(parks).toMatchSnapshot();
    });

    it('displays card title', () => {
      const title = parks.find('h4');
      expect(title.text()).toEqual('TEST PARK');
    });
  });

  describe('States page', function() {
    it('renders successfully', () => {
      const match = {params: {stateName: "1"}};
      const states = shallow(<States match={match}/>);
      expect(states).toMatchSnapshot();
    });

    const states = shallow(<StateCard name="Test-State" num_parks="123" pop="321" mail_code="0"/>);

    it('renders StateCard successfully', () => {
      expect(states).toMatchSnapshot();
    });

    it('displays card title', () => {
      const title = states.find('h4');
      expect(title.text()).toEqual('TEST STATE');
    });
  });

  describe('Recreation page', function() {
    it('renders successfully', () => {
      const match = {params: {pageNum: "1"}};
      const rec = shallow(<Recreations match={match}/>);
      expect(rec).toMatchSnapshot();
    });

    const rec = shallow(<RecreationCard rec_name="Test-Rec" num_activities="123" reservable="1" stay_limit="1"/>);

    it('renders RecreationCard successfully', () => {
      expect(rec).toMatchSnapshot();
    });

    it('displays card title', () => {
      const title = rec.find('h4');
      expect(title.text()).toEqual('TEST REC');
    });
  });
});

describe('Instance Page Tests', () => {
  describe('Park instance page', function() {
    const match = {params: {parkName: "Yosemite"}};

    it('renders successfully', () => {
      const park = shallow(<Park match={match}/>);
      expect(park.props().parkName).toMatchSnapshot();
    });
  });

  describe('State instance page', function() {
    const match = {params: {stateName: "Texas"}};

    it('renders successfully', () => {
      const state = shallow(<State match={match}/>);
      expect(state).toMatchSnapshot();
    });
  });

  describe('Recreation instance page', function() {
    const match = {params: {activityName: "Copan Lake"}};

    it('renders successfully', () => {
      const activity = shallow(<Recreation match={match}/>);
      expect(activity).toMatchSnapshot();
    });
  });

  describe('Search page', function() {
    const match = {params: {searchString: "Copan Lake"}};

    it('renders successfully', () => {
      const search = shallow(<Search match={match}/>);
      expect(search).toMatchSnapshot();
    });
  });
});
