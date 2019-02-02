import React from 'react';

import FormTemplate from './form';

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render () {
        return (
            <div>
                <div>
                    Login Form
                </div>
                <div>
                    <FormTemplate handleChange={this.props.handleChange} username={this.props.username} password={this.props.password}/>
                </div>
                <div>
                    <button onClick={this.props.loginUser}>Login</button>
                </div>
            </div>
        );
    }
}

export default loginForm;