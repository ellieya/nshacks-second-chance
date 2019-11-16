import React from 'react';
import './SupportersLanding.css';

class SupportersLanding extends React.Component {
    render() {
        return (
            <div className="supporters-landing">
                <span className="grayed-italics">What type of user are you?</span>
                <button className="big-button" onClick={() => this.props.action("SupportersComingSoon")}>Non-Profit Organization</button>
                <button className="big-button" onClick={() => this.props.action("SupportersLogin")}>Volunteers</button>
            </div>
        );
    }
}

export default SupportersLanding;