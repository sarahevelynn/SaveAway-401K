import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import Loader from "react-loader-spinner";

var baseURL = "https://saveaway401k.herokuapp.com/";

const GuideSubmit = ({ history }) => (
  <div>
    <FreeGuide history={history} />
  </div>
);

class FreeGuide extends Component {
  state = {
    redirect: false,
    message: "",
    isLoading: false
  };

  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupEmail: data.get("signupEmail"),
      signupPhone: data.get("signupPhone"),
      signupCoName: data.get("signupCoName"),
      EmployeeNumber: data.get("EmployeeNumber")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/freeGuide", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addBasicInfo = event => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    fetch(baseURL + "guideRegistration", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(this.sendMessage(event))
      .then(
        setTimeout(() => {
          this.setState({
            message: "Information Sent!",
            isLoading: false
          });
        }, 1000)
      )
      .then(
        setTimeout(() => {
          this.setState({
            redirect: true
          });
        }, 3000)
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/Guide" />;
    }
    return (
      <div>
        <div id="infoSignup">
          <div id="signup">
            <h2>Signup and Receive a Free Guide! </h2>
            <form className="signupForm" onSubmit={this.addBasicInfo}>
              <label htmlFor="signupName">Your Full Name</label>
              <input type="text" name="signupName" />
              <label htmlFor="signupEmail">Your Company Email Adress</label>
              <input type="text" name="signupEmail" />
              <label htmlFor="signupPhone">Your Company Phone Number</label>
              <input type="text" name="signupPhone" />
              <label htmlFor="signupCoName">Your Company Name</label>
              <input type="text" name="signupCoName" />
              <label htmlFor="EmployeeNumber">
                How many employees do you have?
              </label>
              <select name="EmployeeNumber" className="signupInputDrop">
                <option value="" disabled selected>
                  Looking to offer 401Ks to..
                </option>
                <option value="1-10">1-10 employees</option>
                <option value="20-100">20-100 employees</option>
                <option value="100-200">100-200 employees</option>
              </select>
              <br />
              {this.state.isLoading === true ? (
                <Loader
                  type="ThreeDots"
                  color="#c33539"
                  height="50"
                  width="100"
                />
              ) : (
                <p> {this.state.message} </p>
              )}
              <input type="submit" className="submitButton" value="Submit" />
            </form>
          </div>
        </div>
        <FooterMovable />
      </div>
    );
  }
}

export default withRouter(GuideSubmit);
export { FreeGuide };
