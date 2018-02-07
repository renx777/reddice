import React, { Component } from 'react';
import timezones from '../../data/timezone'
import map from 'lodash/map';


class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:''
        }
    
        // bind this
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        const options=map(timezones,(val,key) =>
        <option key={val} value={val}>{key}</option>
    ) 
    
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input value={this.state.username} onChange={this.handleChange} type="text" name="username" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input value={this.state.email} onChange={this.handleChange} type="text" name="email" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label className="control-label">Confirm</label>
                    <input value={this.state.passwordConfirmation} onChange={this.handleChange} type="password" name="passwordConfirmation" className="form-control" />
                </div>
                    

                   

                    
                    <div className="form-group">
                        <label className="control-label">Timezone</label>
                        <select 
                        name="timezone" 
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.timezone}
                        >
                        <option value="" disabled>Choose Your Timezone</option> 
                        {options}
                        </select>
                        
                    </div>

                

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        ); 
    }
}

export default SignupForm;