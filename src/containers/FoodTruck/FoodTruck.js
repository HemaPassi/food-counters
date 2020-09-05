import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addFoodTruck,
  editFoodTruck,
  removeFoodTruck,
  fetchData,
  fetchDataJson,
} from "../../store/actions/index";
import { bindActionCreators } from "redux";
import Layout from "../../components/Layout/Layout";
import Navigation from "../../components/Navigation/Navigation";

class FoodTruck extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isForm: false,
    isCloseClicked: false,
    isSubmit: false,
    isEditFormDisable: true,
    isEdit: false,
    clickOption: "",
  };

  componentDidMount = () => {
    this.props.fetchDataJson();
  };

  onFoodTruckClickHandler = (evt, key) => {
    // eslint-disable-next-line default-case
    switch (key) {
      case "add":
        this.setState({ isForm: true, clickOption: key });
        break;
      case "close":
        this.setState({ isForm: false, clickOption: key });
        break;
      case "delete":
        this.props.removeFoodTruck(key, evt);
        break;
      case "resetSearch":
        this.props.fetchDataJson({});
        break;
      default:
        break;
    }
  };

  onCloseHandler = () => {
    this.setState({
      isForm: false,
      isCloseClicked: true,
      isEditFormDisable: true,
    });
  };
  onSubmitHandler = (evt, data, isEdit = false) => {
    this.setState({ isEditFormDisable: true });
    if (isEdit) {
      this.props.editFoodTruck(data);
    } else {
      data.id = data.title + "_" + Math.floor(Math.random() * 100);
      this.props.addFoodTruck(data);
    }
  };

  render() {
    return (
      <>
        <Navigation onFoodTruckClickHandler={this.onFoodTruckClickHandler} />
        <div className="wrapper">
          <Layout
            data={this.props.data}
            type={this.props.type}
            isForm={this.state.isForm}
            isEdit={this.state.isEdit}
            onSubmitHandler={this.onSubmitHandler}
            onSubmitHandler={this.onSubmitHandler}
            onCloseHandler={this.onCloseHandler}
            clickOption={this.state.clickOption}
            onFoodTruckClickHandler={this.onFoodTruckClickHandler}
          />
        </div>
        <footer className="footer">
          <div>FOOTER</div>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.FoodTruckData.data,
    type: state.FoodTruckData.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addFoodTruck, editFoodTruck, removeFoodTruck, fetchData, fetchDataJson },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodTruck);
