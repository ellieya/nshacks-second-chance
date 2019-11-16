import React from 'react';
import './SupportersLogin.css';
import Login from '../img/googlelogin.png';

class SupportersLogin extends React.Component {
    render() {
        return (
            <div className="supporters-login">
                <span className="grayed-italics">Volunteers Login</span>
                <img src={Login} onClick={
                    () => {
                        this.props.action("SupportersHome")
                    }}/>
            </div>
        );
    }
}

export default SupportersLogin;