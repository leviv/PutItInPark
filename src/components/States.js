import React from 'react';
import StateCard from './StateCard';
import ReactPaginate from 'react-paginate';
import Fuse from 'fuse.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { expandFilters } from './helpers/Helpers.js'

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations";

class States extends React.Component {
  handlePageClick = data => {
    let selected = data.selected + 1;
    this.props.history.push('/states/' + selected);

    // Ensure that we don't load the data twice
    if (selected !== this.state.pageNumber) {
      this.setState({
        pageNumber: selected,
        states: []
      }, () => {
        this.makeApiCall(selected);
      });
    }
  };

  constructor(props) {
    super(props);
    const { match } = this.props;
    const pageNum = match.params.page

    this.state = {
      states: [],
      pageNumber: pageNum || 1,
      numPages: 1,
      loaded: false,
      query: {},
    };

    this.applyFilters = this.applyFilters.bind(this);
    this.search = this.search.bind(this);
  }

  makeApiCall(pageNumber) {
    console.log(API_ENDPOINT + "?q="+ JSON.stringify(this.state.query) + "&page=" + pageNumber);
    fetch(API_ENDPOINT + "?q="+ JSON.stringify(this.state.query) + "&results_per_page=12&page=" + pageNumber)

      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({numPages: data.total_pages});
        // Process data
        data.objects.forEach((park) => {
          this.state.states.push(park);
        });
      }).then(() => {
        this.setState({loaded: true});
      });
  }

  search() {
    let searchString = document.getElementById("modelSearchField").value

    if (searchString === '') {
      this.setState({
        pageNumber: 1,
        states: []
      });
      this.makeApiCall(1);
      return;
    }

    fetch(API_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))

      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ['name'],
          threshold: 0.3
        };
        const fuse = new Fuse(data['objects'], options);
        const searchRes = fuse.search(searchString);
        console.log(searchRes);
        this.props.history.push('/states/1');

        this.setState({
          pageNumber: 1,
          numPages: searchRes.length / 12,
          states: searchRes,
          query: {}
        });
      })
  }

  componentDidMount() {
    this.makeApiCall(this.state.pageNumber);
  }

  applyFilters () {
    const recFilterIndex = document.getElementById("recFilter").selectedIndex;
    const parkFilterIndex = document.getElementById("parkFilter").selectedIndex;
    const popFilterIndex = document.getElementById("popFilter").selectedIndex;
    const sortIndex = document.getElementById("sort").selectedIndex -1 ;
    const sortDirIndex = document.getElementById("sort-direction").selectedIndex-1 ;

    let filters = [];

    // Get the rec filter
    if (recFilterIndex === 1) {
      filters.push({"name":"numrec","op":"le","val":10});
    } else if (recFilterIndex === 2) {
      filters.push({"name":"numrec","op":"ge","val":11});
      filters.push({"name":"numrec","op":"le","val":20});
    } else if (recFilterIndex === 3) {
      filters.push({"name":"numrec","op":"ge","val":21});
    }

    // Get the fee filter
    if (parkFilterIndex === 1) {
      filters.push({"name":"num_parks","op":"eq","val":0});
    } else if (parkFilterIndex === 2) {
      filters.push({"name":"num_parks","op":"ge","val":1});
      filters.push({"name":"num_parks","op":"le","val":3});
    } else if (parkFilterIndex === 3) {
      filters.push({"name":"num_parks","op":"ge","val":4});
    }

    // Get the visitor filter
    if (popFilterIndex === 1) {
      filters.push({"name":"pop","op":"le","val":1000000});
    } else if (popFilterIndex === 2) {
      filters.push({"name":"pop","op":"ge","val":1000001});
      filters.push({"name":"pop","op":"le","val":2000000});
    } else if (popFilterIndex === 3) {
      filters.push({"name":"pop","op":"ge","val":2000001});
    }

    // List of options to sort by
    const sort = ["name", "num_parks", "numrec", "pop", "mail_code"];
    let sortQuery = {};
    // Check if a sort option was selected
    if (sortIndex > -1) {
      const dir = sortDirIndex === 0 ? "asc" : "desc";
      sortQuery = [{"field":sort[sortIndex],"direction":dir}];
    }
    const newQuery = {
      "filters": filters,
      "order_by": sortQuery
    };

    this.props.history.push('/states/1');

    this.setState({
      pageNumber: 1,
      states: [],
      query: newQuery
    }, () => {
      this.makeApiCall(1);
    });
  }

  render() {
    const { match } = this.props;
    const pageNum = match.params.page

    const row = this.state.states.map((x,i) => {
      return i % 4 === 0 ? this.state.states.slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>States</h2>
        </div>

        <div className="container">
          <div className="collapsed" id="augment-container">
            <div className="row search-row">
              <div className="model-search">
                <h4 className="model-search-component">Find</h4>
                <input className="form-control model-search-component" id="modelSearchField" type="search" placeholder="State" aria-label="Park Search" onKeyDown={this.search}/>
                <FontAwesomeIcon icon={faSearch} className="model-search-component" onClick={this.search}/>
              </div>
              <FontAwesomeIcon icon={faAngleDown} id="carat" onClick={expandFilters}/>
            </div>
            <div className="row">
              <div className="col-md-8 model-filter">
                <h4>Filter by</h4>
                <select className="form-control" id="recFilter">
                  <option selected>Num of Recreation Areas</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>21+</option>
                </select>
                <select className="form-control" id="parkFilter">
                  <option selected>Num of Parks</option>
                  <option>0</option>
                  <option>1-3</option>
                  <option>4+</option>
                </select>
                <select className="form-control" id="popFilter">
                  <option selected>Population</option>
                  <option>0-1,000,000</option>
                  <option>1,000,001-2,000,000</option>
                  <option>2,000,001+</option>
                </select>
              </div>
              <div className="col-md-4 model-filter">
                <h4>Sort by</h4>
                <select className="form-control" id="sort">
                  <option selected>Pick One</option>
                  <option>Location Name</option>
                  <option>Number of Parks</option>
                  <option>Number of Recreation Areas</option>
                  <option>Population</option>
                  <option>Mail Code</option>
                </select>
                <select className="form-control" id="sort-direction">
                  <option selected>Descending</option>
                  <option>Ascending</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button className="button button-secondary" onClick={this.applyFilters}>Apply Filters</button>
            </div>
          </div>

          {row.map((result, index) => {
            return (
              <div className="row" key={index}>
                {result.map((item, innerIndex) => {
                  return (
                    <div className="col-md-3 instance-container" key={innerIndex}>
                      <StateCard
                        name={item.name}
                        imglink={item.imglink}
                        num_parks={item.num_parks}
                        numrec={item.numrec}
                        pop={item.pop}
                        mail_code={item.mail_code}
                      />
                    </div>
                  );
                })}
              </div>
            );
         })}

         <div className="text-center">
           <ReactPaginate
             previousLabel={'Previous'}
             nextLabel={'Next'}
             breakLabel={'...'}
             breakClassName={'break-me'}
             pageCount={this.state.numPages}
             forcePage={pageNum - 1}
             marginPagesDisplayed={2}
             pageRangeDisplayed={3}
             onPageChange={this.handlePageClick}
             containerClassName={'pagination'}
             subContainerClassName={'pages pagination'}
             activeClassName={'active'}
           />
         </div>
        </div>
      </React.Fragment>
    );
  }
}

export default States;
