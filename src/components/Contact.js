import React, { Component } from 'react';
import { FormErrors } from './FormErrors'; 
import '../CSS/contact.css';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { NavLink } from "react-router-dom";



const initialState = {
    email: '',
    uname: '',
    m_no:'',
    com_web:'',
    chal:'',
    controlledDate:null,
    time:null,
    formUpErrors: {email: '', uname: ''},  
    emailValid: false,
    unameValid: false,
    formValid: false  
}; 

 

class Contact extends Component { 
constructor (props) {
  super(props);
  this.state = initialState;

  this.handleSubmit.bind(this);
};

onchangeDateTime=(event , date)=>{
  this.setState({controlledDate:date});
}
onchangeTime=(event , time)=>{
  this.setState({time:time});
}


 handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
};
validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formUpErrors;
    let emailValid = this.state.emailValid;
    let unameValid = this.state.unameValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
        fieldValidationErrors.email = emailValid ? '' : '  format is invalid';
        break;
      case 'uname':
        unameValid = value.length >= 3;
        fieldValidationErrors.uname = unameValid ? '': ' is required';
        break;
      default:
        break;
    };
    this.setState({formUpErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    unameValid: unameValid,
                  }, this.validateForm);
  };


  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.unameValid });
  };
 
handleSubmit = (e) =>{
 
 e.preventDefault(); 
  
};
  
  render () {  
 
   	return ( 
       	<div className="form"> 
         <h1>Get in touch to discuss your project, request a quote or even just to pick our brains.</h1>
         <h3>1. Tell us about your company</h3>
            <form className="Form" onSubmit={this.handleSubmit} >  
                <div className="form-group">
                    <input type="text" className="form-control" 
                            name="uname"
                            placeholder="Your name" 
                            value={this.state.uname}
                            onChange={this.handleUserInput}  />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" 
                            name="email"
                            placeholder="Your Email" 
                            value={this.state.email}
                            onChange={this.handleUserInput}  />
                    <input type="number" className="form-control" 
                            name="m_no"
                            placeholder="Your phone number" 
                            value={this.state.m_no}
                            onChange={this.handleUserInput}  /> 
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                            name="com_web"
                            placeholder="Company website" 
                            value={this.state.com_web}
                            onChange={this.handleUserInput}  />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                            name="chal"
                            placeholder="What's your company's biggest challenge today?" 
                            value={this.state.chal}
                            onChange={this.handleUserInput}  />
                </div>
                <hr className="Form"  /><FormErrors formErrors={this.state.formUpErrors} /> 
                <h3>2. What are you looking to work on?</h3>
                <textarea id="question" 
                          rows="4"
                          placeholder="Describe your project briefly!" ></textarea>
                          <br/>
                <label>Drag or Browse your File!</label>
                <input class="file-field" 
                        type="file" 
                        accept="application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint" 
                        name="project_brief"
                        ></input>
                <h3>3. What services are you interested in?</h3>
                        <input type="checkbox" id="1" />Web or Mobile Apps Development
                        <input type="checkbox" id="2" />Hire Dedicated Developers
                        <br/>
                        <input type="checkbox" id="3" />AI/ML Development Services
                        <input type="checkbox" id="4" />Web or Mobile Apps Development 
                        <br/>
                        <input type="checkbox" id="5" />Software Testing and QA
                        <input type="checkbox" id="6" />API Development & Integration
                        <br/>
                <h3>4. Schedule a call with our tech expert. Get a detailed tech consultation for free!</h3>
                <DatePicker
            hintText="Origin date"
            value={this.state.controlledDate}
            id="date"
            onChange={this.onchangeDateTime}
            autoOk={true}
            disableYearSelection={true}/>
          <TimePicker hintText="Start time" value={this.state.time} id="time" onChange={this.onchangeTime}/>
          
                <br/>
                    <button type="submit" className="btn btn-warning" disabled={!this.state.formValid} >SUBMIT</button>  
            </form> 
            <img
            className="d-block w-100"
            src="/Images/1.jpg"
            alt="First slide"
            height="40px"
          />
          <div>
            <h5>Canada</h5>
            <h6>14 Rue Bentwood,Dollard-dex-ormeaux,QC H9A,Canada</h6>
            <NavLink to="/#">Call us</NavLink>
          </div>
          
       	</div> 
   )
 }
};
export default Contact;