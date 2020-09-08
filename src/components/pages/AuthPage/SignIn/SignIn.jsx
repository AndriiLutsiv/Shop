import React from "react";
import Input from "../../../Input";
import classes from "./SignIn.module.css";
import Button from "../../../../button";
import { signInWithGoogle } from "../../../../firebase/firebase";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };
  submit = (e) => {
    e.prevent.default();
    this.setState({ email: "", password: "" });
  };

  changeHandler = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className={classes.SignIn}>
        <h2>I already have an account</h2>
        <div>Sign in with your email and passord</div>
        <form onSubmit={this.submit}>
          <Input
            changeHandler={this.changeHandler}
            name="email"
            type="text"
            placeholder={"Email"}
            value={this.state.email}
          />
          <Input
            changeHandler={this.changeHandler}
            name="password"
            type="password"
            placeholder={"Password"}
            value={this.state.password}
          />
          <Button meaning={"Sign In"} />
          <Button onClick={signInWithGoogle} meaning={"Sign In with Google"} />
        </form>
      </div>
    );
  }
}
export default SignIn;
