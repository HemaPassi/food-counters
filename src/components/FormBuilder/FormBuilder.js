import React, { Component } from "react";
import "./FormBuilder.scss";
import Input from "../UI/Input/Input";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });

    //setValue(evt.target.value);
    //props.onChangeHandler();
  };

  componentDidMount() {
    // console.log("is edit " + props.isEdit + " data ", props.data);
    console.log("in form builder  ", this.props.data);
    if (this.props.isEdit) {
      this.setState({ ...this.props.data });
    }
    console.log("edit componet did mount ", { ...this.props.data });
  }

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    // this.setState({ id: this.state.title });
    console.log("on submit FINAL state  ", this.state);
    this.props.onSubmitHandler(evt, this.state, this.props.isEdit);
  };

  onCloseHandler = (evt) => {
    evt.preventDefault();
    this.props.onCloseHandler("close");
  };

  render() {
    return (
      <div className="form-builder">
        <form>
          <h2>Food Trucks</h2>
          <Input
            type="text"
            label="Food Counter"
            name="title"
            value={this.state.title}
            onChange={(event) => this.onChangeHandler(event, "title")}
          />
          <Input
            label="Owner Name"
            type="text"
            name="ownerName"
            value={this.state.ownerName}
            onChange={(event) => this.onChangeHandler(event, "ownerName")}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            value={this.state.address}
            onChange={(event) => this.onChangeHandler(event, "address")}
          />
          <Input
            type="text"
            label="Latitude"
            name="latitude"
            value={this.state.latitude}
            onChange={(event) => this.onChangeHandler(event, "latitude")}
          />
          <Input
            type="text"
            label="Longitude"
            name="longitude"
            value={this.state.longitude}
            onChange={(event) => this.onChangeHandler(event, "longitude")}
          />
          <Input
            label="Opening Time"
            type="text"
            name="openingTime"
            value={this.state.openingTime}
            onChange={(event) => this.onChangeHandler(event, "openingTime")}
          />
          <Input
            label="Closing Time"
            type="text"
            name="closingTime"
            value={this.state.closingTime}
            onChange={(event) => this.onChangeHandler(event, "closingTime")}
          />
          <Input
            label="Other Details"
            type="text"
            name="otherDetails"
            value={this.state.otherDetails}
            onChange={(event) => this.onChangeHandler(event, "otherDetails")}
          />
          <button onClick={this.onSubmitHandler}>Submit</button>
          <button onClick={this.onCloseHandler}>Close</button>
        </form>
      </div>
    );
  }
}
export default FormBuilder;
