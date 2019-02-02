import React from 'react';

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
                    <FormTemplate handleChange={this.props.handleChange} username={this.props.username} password={this.props.password} />
                </div>
                <div>
                    <button onClick={this.props.registerNewUser}>Register</button>
                </div>                
            </div>
        );
    }
}

export default registerForm;