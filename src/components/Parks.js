import React from 'react';
import ParkCard from './ParkCard';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

class Parks extends React.Component {
  handlePageClick = data => {
    let selected = data.selected + 1;
    this.props.history.push('/parks/' + selected);

    // Ensure that we don't load the data twice
    if (selected !== this.state.pageNumber) {
      this.setState({
        pageNumber: selected,
        parks: []
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
      parks: [],
      pageNumber: pageNum || 1,
      loaded: false
    };
  }

  makeApiCall(pageNumber) {
    fetch(API_ENDPOINT + "?page=" + pageNumber)

      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((park) => {
          park.rec_ids = park.rec_ids.split(",");
          this.state.parks.push(park);
        });
      }).then(() => {
        this.setState({loaded: true});
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.pageNumber);
  }

  render() {
    const { match } = this.props;
    const pageNum = match.params.page

    const row = this.state.parks.map((x,i) => {
      return i % 4 === 0 ? this.state.parks.slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>National Parks</h2>
        </div>

        <div className="container">
          <div className="collapsed" id="augment-container">
            <div className="row search-row">
              <div className="model-search">
                <h4 className="model-search-component">Find</h4>
                <input className="form-control model-search-component" type="search" placeholder="Park" aria-label="Park Search"/>
                <FontAwesomeIcon icon={faSearch} className="model-search-component"/>
              </div>
              <FontAwesomeIcon icon={faAngleDown} id="carat" onClick={expandFilters}/>
            </div>
            <div className="row">
              <div className="col-md-8 model-filter">
                <h4>Filter by</h4>
                <select class="form-control" id="filter1">
                  <option selected disabled>Num of Recreation Areas</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20+</option>
                </select>
                <select class="form-control" id="filter2">
                  <option selected disabled>Park Fee</option>
                  <option>Free</option>
                  <option>Not Free</option>
                </select>
                <select class="form-control" id="filter3">
                  <option selected disabled>Number of Visitors</option>
                  <option>0-50,000</option>
                  <option>50,000-100,000</option>
                  <option>100,000+</option>
                </select>
              </div>
              <div className="col-md-4 model-filter">
                <h4>Sort by</h4>
                <select class="form-control" id="sort1">
                  <option selected disabled>Pick One</option>
                  <option>Park Name</option>
                  <option>Location</option>
                  <option>Num of Recreation Areas</option>
                  <option>Fee</option>
                  <option>Number of Visitors</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button className="button button-secondary">Apply Filters</button>
            </div>
          </div>

          {row.map((result, index) => {
            return (
              <div className="row" key={index}>
                {result.map((item, innerIndex) => {
                  return (
                    <div className="col-md-3 instance-container" key={innerIndex}>
                      <ParkCard
                        park_name={item.park_name}
                        imglink={item.imglink}
                        location={item.location}
                        num_rec={item.num_rec}
                        fee={item.fee}
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
             pageCount={5}
             forcePage={pageNum - 1}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
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

function expandFilters () {
  const filters= document.getElementById("augment-container");
  if (filters.classList.contains("collapsed")) {
    const sectionHeight = filters.scrollHeight;

    filters.style.height = sectionHeight + "px";

    filters.classList.remove("collapsed");
    document.getElementById("carat").style.transform = "rotate(180deg)";
  } else {
    filters.style.height = "98px";
    filters.classList.add("collapsed");
    document.getElementById("carat").style.transform = "rotate(0deg)";
  }
}

export default Parks;
