import React from 'react';


class FormTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        placeholder='username'
                        name='username'
                        value={this.state.username}
                        required={true}
                    />
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        placeholder='password'
                        name='password'
                        value={this.state.password}
                        required={true}
                    />
                </form>
            </div>
        );
    }
}

export default FormTemplate;