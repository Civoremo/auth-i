import React from 'react';


class FormTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        onChange={this.props.handleChange}
                        placeholder='username'
                        name='username'
                        value={this.props.username}
                        required={true}
                    />
                    <input 
                        type="text"
                        onChange={this.props.handleChange}
                        placeholder='password'
                        name='password'
                        value={this.props.password}
                        required={true}
                    />
                </form>
            </div>
        );
    }
}

export default FormTemplate;