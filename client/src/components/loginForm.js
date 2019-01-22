import React from 'react';
import axios from 'axios';

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
                    <button>Login</button>
                </div>
            </div>
        );
    }
}

export default loginForm;