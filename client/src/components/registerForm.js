import React from 'react';
import axios from 'axios';

import FormTemplate from './form';

class registerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <div>
                    Registration Form
                </div>
                <div>
                    <FormTemplate />
                </div>
                <div>
                    <button>Register</button>
                </div>                
            </div>
        );
    }
}

export default registerForm;