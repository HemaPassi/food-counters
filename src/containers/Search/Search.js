import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../../store/actions/index";
import "./Search.scss";
/* Search container is responsible to search Movies by Title */
class Search extends Component {
  constructor(props) {
    super(props);
  }
  state = { term: "" };

  onChangeHandler = (evt) => {
    evt.preventDefault();
    this.setState({ term: evt.target.value });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.fetchData({ title: this.state.term, key: "search" });
  };

  render() {
    return (
      <div className="search-wrapper">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <span>Find Food trucks </span>:
            <input
              placeholder=""
              value={this.state.title}
              onChange={(evt) => this.onChangeHandler(evt, "title")}
            />
          </div>
          <span className="">
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

function mapStateToProps() {}

export default connect(null, mapDispatchToProps)(Search);
