import React, { Component } from "react";
import "./FormBuilder.scss";
import Input from "../UI/Input/Input";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.errorText = "";
  }

  onChangeHandler = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });

    //setValue(evt.target.value);
    //props.onChangeHandler();
  };

  componentDidMount() {
    if (this.props.isEdit) {
      this.setState({ ...this.props.data });
    }
  }

  onSubmitHandler = (evt) => {
    evt.preventDefault();
    // this.setState({ id: this.state.title });
    const { title, latitude, longitude, openingTime, closingTime } = this.state;
    if (!title || !latitude || !longitude || !openingTime || !closingTime) {
      this.setState({ errorText: "Please fill all the details" });
    } else {
      this.setState({
        errorText: "Please click on close button, to close this panel",
      });
      this.props.onSubmitHandler(evt, this.state, this.props.isEdit);
    }
  };

  onCloseHandler = (evt) => {
    evt.preventDefault();
    this.setState({ errorText: "" });
    this.props.onCloseHandler("close");
  };

  render() {
    return (
      <div className="form-builder">
        <form>
          <h2>Food Trucks</h2>
          <Input
            type="text"
            label="Food Counter*"
            name="title"
            required
            value={this.state.title}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            label="Owner Name"
            type="text"
            name="ownerName"
            value={this.state.ownerName}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            type="text"
            label="Address"
            name="address"
            value={this.state.address}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            type="text"
            label="Latitude*"
            name="latitude"
            value={this.state.latitude}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            type="text"
            label="Longitude*"
            name="longitude"
            required
            value={this.state.longitude}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            label="Opening Time*"
            type="text"
            name="openingTime"
            required
            value={this.state.openingTime}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            label="Closing Time*"
            type="text"
            name="closingTime"
            required
            value={this.state.closingTime}
            onChange={this.onChangeHandler.bind(this)}
          />
          <Input
            label="Other Details"
            type="text"
            name="otherDetails"
            value={this.state.otherDetails}
            onChange={this.onChangeHandler.bind(this)}
          />
          <div class="error">{this.state.errorText}</div>
          <button onClick={this.onSubmitHandler}>Submit</button>
          <button onClick={this.onCloseHandler}>Close</button>
        </form>
      </div>
    );
  }
}
export default FormBuilder;
