import React from "react";
import RecreationCard from "./RecreationCard";
import RecVis from "../visualizations/RecVis";
import ReactPaginate from "react-paginate";
import Fuse from "fuse.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  API_ENDPOINT,
  convertToRows,
  expandFilters,
} from "../../helpers/Helpers.js";
import { fakeFetch } from "../../fake_api/fakeApi.js";

const endpoint = API_ENDPOINT + "/recreations";

class Recreations extends React.Component {
  handlePageClick = (data) => {
    let selected = data.selected + 1;
    this.props.history.push("/recreations/" + selected);

    // Ensure that we don't load the data twice
    if (selected !== this.state.pageNumber) {
      this.setState(
        {
          pageNumber: selected,
          recs: [],
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
      recs: [],
      pageNumber: pageNum || 1,
      numPages: 1,
      loaded: false,
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
    fakeFetch(endpoint, "/recreations/", null, this.state.query, {
      resultsPerPage: 12,
      pageNumber,
    })
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ numPages: data.total_pages });
        // Process data
        data.objects.forEach((rec) => {
          this.state.recs.push(rec);
        });
      })
      .then(() => {
        this.setState({ loaded: true });
      });
  }

  search() {
    let searchString = document.getElementById("modelSearchField").value;

    if (searchString === "") {
      this.setState({
        pageNumber: 1,
        recs: [],
      });
      this.makeApiCall(1);
      return;
    }

    // fetch(endpoint)
    fakeFetch(endpoint, "/recreations", null, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ["rec_name"],
          threshold: 0.5,
        };
        const fuse = new Fuse(data["objects"], options);
        const searchRes = fuse.search(searchString);
        this.props.history.push("/recreations/1");

        this.setState({
          pageNumber: 1,
          numPages: searchRes.length / 12,
          recs: searchRes,
          query: {},
        });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.pageNumber);
  }

  applyFilters() {
    const reserveFilterIndex =
      document.getElementById("reserveFilter").selectedIndex;
    const stayFilterIndex = document.getElementById("stayFilter").selectedIndex;
    const activityFilterIndex =
      document.getElementById("activityFilter").selectedIndex;
    const sortIndex = document.getElementById("sort").selectedIndex - 1;
    const sortDirIndex =
      document.getElementById("sort-direction").selectedIndex - 1;

    let filters = [];

    // Get the rec filter
    if (reserveFilterIndex === 1) {
      filters.push({ name: "reservable", op: "eq", val: "1" });
    } else if (reserveFilterIndex === 2) {
      filters.push({ name: "reservable", op: "eq", val: "0" });
    }

    // Get the fee filter
    if (stayFilterIndex === 1) {
      filters.push({ name: "stay_limit", op: "eq", val: "1" });
    } else if (stayFilterIndex === 2) {
      filters.push({ name: "stay_limit", op: "eq", val: "0" });
    }

    // Get the visitor filter
    if (activityFilterIndex === 1) {
      filters.push({ name: "num_activities", op: "le", val: 5 });
    } else if (activityFilterIndex === 2) {
      filters.push({ name: "num_activities", op: "ge", val: 6 });
      filters.push({ name: "num_activities", op: "le", val: 10 });
    } else if (activityFilterIndex === 3) {
      filters.push({ name: "num_activities", op: "ge", val: 11 });
    }

    // List of options to sort by
    const sort = [
      "rec_name",
      "rec_id",
      "location",
      "natpark",
      "num_activities",
    ];
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

    this.props.history.push("/recreations/1");

    this.setState(
      {
        pageNumber: 1,
        recs: [],
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

    const cardRows = convertToRows(this.state.recs);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>Recreational Areas</h2>
        </div>

        <div className="container">
          <RecVis />

          <div className="collapsed" id="augment-container">
            <div className="row search-row">
              <div className="model-search">
                <h4 className="model-search-component">Find</h4>
                <input
                  className="form-control model-search-component"
                  id="modelSearchField"
                  type="search"
                  placeholder="Rec Area"
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
                  id="reserveFilter"
                  onChange={this.applyFilters}
                >
                  <option>Reservable</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  className="form-control"
                  id="stayFilter"
                  onChange={this.applyFilters}
                >
                  <option>Stay Limit</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  className="form-control"
                  id="activityFilter"
                  onChange={this.applyFilters}
                >
                  <option>Num Activities</option>
                  <option>0-5</option>
                  <option>6-10</option>
                  <option>11+</option>
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
                  <option>Rec Name</option>
                  <option>Rec Id</option>
                  <option>State</option>
                  <option>National Park</option>
                  <option>Num Activities</option>
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

          {cardRows.map((row, index) => {
            return (
              <div className="row" key={index}>
                {row.map((item, innerIndex) => {
                  return (
                    <div
                      className="col-md-3 instance-container"
                      key={innerIndex}
                    >
                      <RecreationCard
                        rec_name={item.rec_name}
                        imglink={item.imglink}
                        num_activities={item.num_activities}
                        reservable={item.reservable}
                        stay_limit={item.stay_limit}
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

export default Recreations;
