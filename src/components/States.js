import React from 'react';
import StateCard from './StateCard';
import ReactPaginate from 'react-paginate';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/locations";

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
          this.state.states.push(park);
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

    const row = this.state.states.map((x,i) => {
      return i % 4 === 0 ? this.state.states.slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>States</h2>
        </div>

        <div className="container">

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

export default States;
