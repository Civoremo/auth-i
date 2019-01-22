import React from 'react';
import axios from 'axios';

class displayUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3521/api/users'
        })
            .then(users => {
                // console.log(users);
                this.setState({
                    users: users.data,
                });
            })
            .catch(err => {
                console.log('error retrieving users');
            });
    }

    render () {
        if(this.state.users.length === 0) {
            return <div>Loading Users</div>
        }
        // console.log(this.state.users);
        return (
            <div>
                {this.state.users.map(user => {
                    return (
                        <div key={user.id}>
                            {user.username}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default displayUsers;