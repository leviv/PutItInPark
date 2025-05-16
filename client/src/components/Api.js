import React from "react";
import { fakeFetch } from '../fake_api/fakeApi';
import { API_ENDPOINT } from "../helpers/Helpers.js";

const NO_RESULTS = "No results found! Try the url /api/nationalparks to test :)"

class Footer extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const query = match.params.query;

    this.state = {
      query: query,
      result: "",
    };
  }

  componentDidMount() {
    fakeFetch(API_ENDPOINT + "/" + this.state.query)
      .then((resp) => {
        const result = resp.json();

        this.setState({ result: result.length > 0 ? JSON.stringify(result) : NO_RESULTS});
      })
  }

  render() {
    return (
      <p>{this.state.result}</p>
    );
  }
}

export default Footer;
