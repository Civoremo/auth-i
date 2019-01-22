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
                    <FormTemplate />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        );
    }
}

export default loginForm;