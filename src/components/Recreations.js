import React from 'react';
import RecreationCard from './RecreationCard';
import ReactPaginate from 'react-paginate';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations";

class Recreations extends React.Component {
  handlePageClick = data => {
    let selected = data.selected + 1;
    this.props.history.push('/recreations/' + selected);

    // Ensure that we don't load the data twice
    if (selected !== this.state.pageNumber) {
      this.setState({
        pageNumber: selected,
        recs: []
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
      recs: [],
      pageNumber: pageNum || 1,
      loaded: false
    };
  }

  makeApiCall(pageNumber) {
    console.log(API_ENDPOINT + "?page=" + pageNumber)
    fetch(API_ENDPOINT + "?page=" + pageNumber)

      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((rec) => {
          this.state.recs.push(rec);
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

    const row = this.state.recs.map((x,i) => {
      return i % 4 === 0 ? this.state.recs.slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>Activities</h2>
        </div>

        <div className="container">

          {row.map((result, index) => {
            return (
              <div className="row" key={index}>
                {result.map((item, innerIndex) => {
                  return (
                    <div className="col-md-3 instance-container" key={innerIndex}>
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
             previousLabel={'Previous'}
             nextLabel={'Next'}
             breakLabel={'...'}
             breakClassName={'break-me'}
             pageCount={51}
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

export default Recreations;
