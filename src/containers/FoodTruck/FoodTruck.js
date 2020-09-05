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
    console.log("component did mount ");
    this.props.fetchDataJson();
  };

  onFoodTruckClickHandler = (evt, key) => {
    // eslint-disable-next-line default-case
    console.log("ON FOOD TRUCK CLICK HANDLER key is here " + key);
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
    console.log("isEdit   ", isEdit);
    this.setState({ isEditFormDisable: true });
    console.log("isEdit   ", isEdit);
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
  console.log(
    "MAP SATE TO PROPS",
    typeof state.FoodTruckData,
    "   state here ",
    state.FoodTruckData.data
  );
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
