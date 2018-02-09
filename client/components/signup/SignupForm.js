import React, { Component } from 'react';
import timezones from '../../data/timezone'
import map from 'lodash/map';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../common/TextFieldGroup';
import {browserHistory} from 'react-router';

class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:'',
            errors:'',
            isLoading: false
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

    isValid() {
        const { errors, isValid} = validateInput(this.state);
    
    
        if (!isValid) {
            this.setState({ errors })   
        }

        return isValid;
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.isValid()){

            this.setState({ errors: {} ,isLoading: true });
            this.props.userSignupRequest(this.state).then(
                
    
                () => {

                   // browserHistory.push('/')
                    this.context.router.push('/')
                },
                (err) => this.setState({errors:err.response.data , isLoading: false})
            )

        }

    }
    render() {
        const { errors } = this.state;
        console.log(errors)
        const options=map(timezones,(val,key) =>
        <option key={val} value={val}>{key}</option>
    ) 
    
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join our community</h1>
                
                <TextFieldGroup
                error={errors.username}
                label="Username"
                onChange={this.handleChange}
                checkUserExists={this.checkUserExists}
                value={this.state.username}
                field="username"
                />

                <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={this.handleChange}
                checkUserExists={this.checkUserExists}
                value={this.state.email}
                field="email"
                />

                <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={this.handleChange}
                value={this.state.password}
                field="password"
                type="password"
                />

                <TextFieldGroup
                error={errors.passwordConfirmation}
                label="Password Confirmation"
                onChange={this.handleChange}
                value={this.state.passwordConfirmation}
                field="passwordConfirmation"
                type="password"
                />
                    
                <div className={classnames('form-group', { 'has-error': errors.timezone })}>
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
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}

                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        ); 
    }
}


SignupForm.contextTypes ={
    router:PropTypes.object.isRequired
}

export default SignupForm;