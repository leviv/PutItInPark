import React from 'react';
import ParkCard from './ParkCard';
import ReactPaginate from 'react-paginate';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/nationalparks";

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
    fetch(API_ENDPOINT + "/page=" + pageNumber)

      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.forEach((park) => {
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
export default Parks;
