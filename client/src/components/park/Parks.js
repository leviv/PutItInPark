import React from "react";
import ParkCard from "./ParkCard";
import ParkVis from "../visualizations/ParkVis.js";
import ReactPaginate from "react-paginate";
import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  API_ENDPOINT,
  convertToRows,
  expandFilters,
} from "../helpers/Helpers.js";
import { fakeFetch } from "../fake_api/fakeApi.js";

const endpoint = API_ENDPOINT + "/nationalparks";

class Parks extends React.Component {
  handlePageClick = (data) => {
    let selected = data.selected + 1;
    this.props.history.push("/parks/" + selected);

    // Ensure that we don't load the data twice
    if (selected !== this.state.pageNumber) {
      this.setState(
        {
          pageNumber: selected,
          parks: [],
        },
        () => {
          this.makeApiCall(selected);
        }
      );
    }
  };

  constructor(props) {
    super(props);
    const { match } = this.props;
    const pageNum = match.params.page;

    this.state = {
      parks: [],
      pageNumber: pageNum || 1,
      numPages: 1,
      loaded: false,
      visual: false,
      query: {},
    };

    this.applyFilters = this.applyFilters.bind(this);
    this.search = this.search.bind(this);
  }

  makeApiCall(pageNumber) {
    // fetch(
    //   endpoint +
    //     "?q=" +
    //     JSON.stringify(this.state.query) +
    //     "&results_per_page=12&page=" +
    //     pageNumber
    // )
    fakeFetch(endpoint, "/nationalparks/", null, this.state.query, {
      resultsPerPage: 12,
      pageNumber,
    })
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ numPages: data.total_pages });
        // Process data
        data.objects.forEach((park) => {
          park.rec_ids = park.rec_ids[0].split(",");
          this.state.parks.push(park);
        });
      })
      .then(() => {
        this.setState({ loaded: true });
      });
  }

  search() {
    let searchString = document.getElementById("modelSearchField").value;

    if (searchString.length === 0) {
      this.setState({
        pageNumber: 1,
        parks: [],
      });
      this.makeApiCall(1);
      return;
    }

    // fetch(endpoint)
    fakeFetch(endpoint, "/nationalparks/", null, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ["park_name"],
          threshold: 0.5,
        };
        const fuse = new Fuse(data["objects"], options);
        const searchRes = fuse.search(searchString);
        this.props.history.push("/parks/1");

        this.setState({
          pageNumber: 1,
          numPages: searchRes.length / 12,
          parks: searchRes,
          query: {},
        });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.pageNumber);
  }

  applyFilters() {
    const recFilterIndex = document.getElementById("recFilter").selectedIndex;
    const feeFilterIndex = document.getElementById("feeFilter").selectedIndex;
    const visitorFilterIndex =
      document.getElementById("visitorFilter").selectedIndex;
    const sortIndex = document.getElementById("sort").selectedIndex - 1;
    const sortDirIndex =
      document.getElementById("sort-direction").selectedIndex - 1;

    let filters = [];

    // Get the rec filter
    if (recFilterIndex === 1) {
      filters.push({ name: "num_rec", op: "le", val: 10 });
    } else if (recFilterIndex === 2) {
      filters.push({ name: "num_rec", op: "ge", val: 11 });
      filters.push({ name: "num_rec", op: "le", val: 20 });
    } else if (recFilterIndex === 3) {
      filters.push({ name: "num_rec", op: "ge", val: 21 });
    }

    // Get the fee filter
    if (feeFilterIndex === 1) {
      filters.push({ name: "fee", op: "eq", val: 0.0 });
    } else if (feeFilterIndex === 2) {
      filters.push({ name: "fee", op: "neq", val: 0.0 });
    }

    // Get the visitor filter
    if (visitorFilterIndex === 1) {
      filters.push({ name: "visitors", op: "le", val: 50000 });
    } else if (visitorFilterIndex === 2) {
      filters.push({ name: "visitors", op: "ge", val: 50001 });
      filters.push({ name: "visitors", op: "le", val: 100000 });
    } else if (visitorFilterIndex === 3) {
      filters.push({ name: "visitors", op: "ge", val: 100001 });
    }

    // List of options to sort by
    const sort = ["park_name", "location", "num_rec", "fee", "visitors"];
    let sortQuery = {};
    // Check if a sort option was selected
    if (sortIndex > -1) {
      const dir = sortDirIndex === 0 ? "asc" : "desc";
      sortQuery = [{ field: sort[sortIndex], direction: dir }];
    }
    const newQuery = {
      filters: filters,
      order_by: sortQuery,
    };

    this.props.history.push("/parks/1");

    this.setState(
      {
        pageNumber: 1,
        parks: [],
        query: newQuery,
      },
      () => {
        this.makeApiCall(1);
      }
    );
  }

  render() {
    const { match } = this.props;
    const pageNum = match.params.page;

    const parkRows = convertToRows(this.state.parks);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>National Parks</h2>
        </div>

        <div className="container">
          <ParkVis />

          <div className="collapsed" id="augment-container">
            <div className="row search-row">
              <div className="model-search">
                <h4 className="model-search-component">Find</h4>
                <input
                  className="form-control model-search-component"
                  id="modelSearchField"
                  type="search"
                  placeholder="Park"
                  aria-label="Park Search"
                  onKeyUp={this.search}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="model-search-component"
                  onClick={this.search}
                />
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                id="carat"
                onClick={expandFilters}
              />
            </div>
            <div className="row filters-sort">
              <div className="col-md-8 model-filter">
                <h4>Filter by</h4>
                <select
                  className="form-control"
                  id="recFilter"
                  onChange={this.applyFilters}
                >
                  <option>Num of Recreation Areas</option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>21+</option>
                </select>
                <select
                  className="form-control"
                  id="feeFilter"
                  onChange={this.applyFilters}
                >
                  <option>Price</option>
                  <option>Free</option>
                  <option>Not Free</option>
                </select>
                <select
                  className="form-control"
                  id="visitorFilter"
                  onChange={this.applyFilters}
                >
                  <option>Number of Visitors</option>
                  <option>0-50,000</option>
                  <option>50,000-100,000</option>
                  <option>100,001+</option>
                </select>
              </div>
              <div className="col-md-4 model-filter">
                <h4>Sort by</h4>
                <select
                  className="form-control"
                  id="sort"
                  onChange={this.applyFilters}
                >
                  <option>Pick One</option>
                  <option>Park Name</option>
                  <option>Location</option>
                  <option>Num of Recreation Areas</option>
                  <option>Fee</option>
                  <option>Number of Visitors</option>
                </select>
                <select
                  className="form-control"
                  id="sort-direction"
                  onChange={this.applyFilters}
                >
                  <option>Descending</option>
                  <option>Ascending</option>
                </select>
              </div>
            </div>
          </div>

          {parkRows.map((row, index) => {
            return (
              <div className="row" key={index}>
                {row.map((item, innerIndex) => {
                  return (
                    <div
                      className="col-md-3 instance-container"
                      key={innerIndex}
                    >
                      <ParkCard
                        park_name={item.park_name}
                        imglink={item.imglink}
                        location={item.location}
                        num_rec={item.num_rec}
                        visitors={item.visitors}
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
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.numPages}
              forcePage={pageNum - 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Parks;
