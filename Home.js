import React from "react";
import {Link} from 'react-router-dom' 
class Home extends React.Component 
{
 
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["tel"]="";
        this.setState({input:input});
  
        alert('submitted');
    }
  }

  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
     
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your Full name.";
      }
  
      if (typeof input["username"] !== "undefined") {
          
        var pattern = new RegExp( /^[a-zA-Z0-9]+$/);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      
      if (!input["tel"]) {
        isValid = false;
        errors["tel"] = "Please enter your Phon Number.";
      }
      if (typeof input["tel"] !== "undefined") {
          
        var pattern = new RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        if (!pattern.test(input["tel"])) {
          isValid = false;
          errors["tel"] = "Please enter valid phon number.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (

      <div className="heading">
        <h1>Assignment</h1>
        <div className="left">
         
            <img src="Assets/images/Assg.jpg" height={400} width={650} />

          <h2>Choose a date Range</h2>
          <h5>Dtae range to be choosen for bar graph made using d3.js</h5>
         

        </div>
        <div className="right">
          <div class="container">
            <div class="col-md-6 col-xs-6">
              <h2>Create An Account</h2><br></br>
              <form onSubmit={this.handleSubmit}>
  
  

  <div class="form-group">
    <label for="email">Your Email Address:</label>
    <input 
      type="text" 
      name="email" 
      value={this.state.input.email}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter email" 
      id="email" />

      <div className="text-danger">{this.state.errors.email}</div>
  </div>

  <div class="form-group">
    <label for="password">YourPassword:</label>
    <input 
      type="password" 
      name="password" 
      value={this.state.input.password}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter password" 
      id="password" />

      <div className="text-danger">{this.state.errors.password}</div>
  </div>

  <div class="form-group">
    <label for="password">Confirm Your Password:</label>
    <input 
      type="password" 
      name="confirm_password" 
      value={this.state.input.confirm_password}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter confirm password" 
      id="confirm_password" />

      <div className="text-danger">{this.state.errors.confirm_password}</div>
  </div>
  <div class="form-group">
    <label for="username">Your Full Name:</label>
    <input 
      type="text" 
      name="username" 
      value={this.state.input.username}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter User Full Name" 
      id="username" />

      <div className="text-danger">{this.state.errors.username}</div>
  </div>
  <div class="form-group">
    <label for="tel">Your Phon Number:</label>
    <input 
      type="text" 
      name="tel" 
      value={this.state.input.tel}
      onChange={this.handleChange}
      class="form-control" 
      placeholder="Enter User Phon Number" 
      id="tel" />

      <div className="text-danger">{this.state.errors.tel}</div>
      <br></br>
      <input type="checkbox" id="veh"  /><br/>
<label for="veh">   I read and agree Terms and Condition</label>
      
  </div>
  
 
     
 <input type="submit" value="Create Account" class="btn btn-primary"  />

</form>

            </div>
            

          </div>

        </div>
       

      </div>
     
    );
  }
}
export default Home;
